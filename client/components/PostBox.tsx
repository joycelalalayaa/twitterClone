import React, { useContext } from 'react';
import { graphql } from 'relay-runtime';
import { PostBox_user$key } from './__generated__/PostBox_user.graphql';
import { useFragment, useMutation } from 'react-relay';
import Button from './Button';
import TextArea from './TextArea';
import UserAvatar from './UserAvatar';
import { PostBoxCreatePostMutation } from './__generated__/PostBoxCreatePostMutation.graphql';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';

const FRAGMENT = graphql`
	fragment PostBox_user on User {
		firstName
		lastName
		username
	}
`;
const CREATE_POST_MUTATION = graphql`
	mutation PostBoxCreatePostMutation(
		$username: String!
		$password: String!
		$content: String!
	) {
		createPost(username: $username, password: $password, content: $content) {
			id
			createdAt
		}
	}
`;

interface Props {
	user: PostBox_user$key;
	editable: boolean;
	postContent: string;
	setPostContent: (newContent: string) => void;
	postDate: string | null;
}

export default function PostBox({
	user: user$key,
	editable,
	postContent,
	setPostContent,
	postDate,
}: Props): JSX.Element {
	const user = useFragment<PostBox_user$key>(FRAGMENT, user$key);
	const [createMutation, creatingMutation] =
		useMutation<PostBoxCreatePostMutation>(CREATE_POST_MUTATION);
	const { username, password } = useContext(AuthContext);

	const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

	const editableButton = editable && (
		<div className='flex justify-end mt-2'>
			<Button
				label='Post'
				disabled={creatingMutation}
				onClick={() =>
					createMutation({
						variables: {
							content: postContent,
							username,
							password,
						},
						onCompleted: () => {
							setPostContent('');
							toast.success('Post created!');
						},
						onError: () => {
							setPostContent('');
							toast.success('Unable to create post!');
						},
					})
				}
				variant='primary'
			/>
		</div>
	);

	return (
		<div className='bg-white shadow-md rounded-lg p-4 w-[500px] mx-auto my-2'>
			<div className='flex items-start space-x-4'>
				{/* User Avatar */}
				<UserAvatar initials={initials} />

				{/* Post Input Section */}
				<div className='flex-grow'>
					<div className='flex justify-between'>
						<div className='text-gray-900 text-md font-bold'>
							{user.username}
						</div>
						<div className='text-gray-500 text-sm pt-2'>{postDate}</div>
					</div>
					<TextArea
						value={postContent}
						setValue={setPostContent}
						editable={editable}
					/>
					{editableButton}
				</div>
			</div>
		</div>
	);
}
