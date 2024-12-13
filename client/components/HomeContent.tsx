import { graphql, useLazyLoadQuery } from 'react-relay';
import PostBox from './PostBox';
import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { HomeContentQuery } from './__generated__/HomeContentQuery.graphql';
import TweetDisplay from './TweetDisplay';

const QUERY = graphql`
	query HomeContentQuery($password: String!, $username: String!) {
		genUser(password: $password, username: $username) {
			id
			firstName
			lastName
			...PostBox_user
		}
		genAllPosts {
			id
			...TweetDisplay_post
		}
	}
`;

export default function HomeContent(): JSX.Element {
	const { username, password } = useContext(AuthContext);
	const [draftContent, setDraftContent] = useState('');
	const data = useLazyLoadQuery<HomeContentQuery>(QUERY, {
		username,
		password,
	});
	const user = data.genUser;
	const allPosts = data.genAllPosts;

	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 text-gray-800'>
			{' '}
			{user != null && (
				<PostBox
					user={user}
					editable={true}
					postContent={draftContent}
					setPostContent={setDraftContent}
					postDate={null}
				/>
			)}
			<div>
				{allPosts.map((post) => (
					<TweetDisplay key={post.id} post={post} />
				))}
			</div>
		</div>
	);
}
