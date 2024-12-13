import React, { useContext, useState } from "react";
import { graphql } from "relay-runtime";
import { PostBox_user$key } from "./__generated__/PostBox_user.graphql";
import { useFragment, useMutation } from "react-relay";
import Button from "./Button";
import TextArea from "./TextArea";
import UserAvatar from "./UserAvatar";
import { PostBoxCreatePostMutation } from "./__generated__/PostBoxCreatePostMutation.graphql";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";
import { PostBoxEditPostMutation } from "./__generated__/PostBoxEditPostMutation.graphql";
import { PostBoxDeletePostMutation } from "./__generated__/PostBoxDeletePostMutation.graphql";
import { useRouter } from "next/navigation";

const FRAGMENT = graphql`
  fragment PostBox_user on User {
    id
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
    }
  }
`;

const EDIT_POST_MUTATION = graphql`
  mutation PostBoxEditPostMutation(
    $content: String!
    $postId: String!
    $password: String!
    $username: String!
  ) {
    editPost(
      content: $content
      post_id: $postId
      password: $password
      username: $username
    ) {
      id
      content
    }
  }
`;

const DELETE_POST_MUTATION = graphql`
  mutation PostBoxDeletePostMutation(
    $postId: String!
    $password: String!
    $username: String!
  ) {
    deletePost(post_id: $postId, password: $password, username: $username) {
      id
    }
  }
`;

interface Props {
  user: PostBox_user$key;
  editable: boolean;
  postInitialContent: string;
  postDate: string | null;
  postId: string | null;
}

export default function PostBox({
  user: user$key,
  editable,
  postInitialContent,
  postDate,
  postId,
}: Props): JSX.Element {
  const router = useRouter();
  const user = useFragment<PostBox_user$key>(FRAGMENT, user$key);
  const [createMutation, creatingMutation] =
    useMutation<PostBoxCreatePostMutation>(CREATE_POST_MUTATION);
  const [postContent, setPostContent] = useState(postInitialContent);
  const [editMutation] =
    useMutation<PostBoxEditPostMutation>(EDIT_POST_MUTATION);
  const [deleteMutation] =
    useMutation<PostBoxDeletePostMutation>(DELETE_POST_MUTATION);
  const { username, password } = useContext(AuthContext);

  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  const [editingDraft, setEditingDraft] = useState(false);

  const editOrDeleteSection = !editingDraft && (
    <div className="flex justify-around">
      <div onClick={() => setEditingDraft(true)}>Edit</div>
      <div
        onClick={() => {
          if (postId == null) {
            alert("Post id is somehow null");
            throw new Error("expecation violation");
          }
          deleteMutation({
            variables: {
              username,
              password,
              postId,
            },
            onCompleted: () => {
              toast.success("Post deleted!");
              location.reload();
            },
            onError: () => {
              toast.error("Unable to delete post!");
            },
          });
        }}
      >
        Delete
      </div>
    </div>
  );

  const editableButton = (editable || editingDraft) && (
    <div className="flex justify-end mt-2">
      <Button
        label={editingDraft ? "Save" : "Post"}
        disabled={creatingMutation}
        onClick={() => {
          if (editingDraft) {
            if (postId == null) {
              alert("Post id is somehow null");
              throw new Error("expecation violation");
            }
            editMutation({
              variables: {
                content: postContent,
                username,
                password,
                postId: postId,
              },
              onCompleted: () => {
                toast.success("Post edited!");
                setEditingDraft(false);
                location.reload();
              },
              onError: () => {
                toast.error("Unable to edit post!");
                setEditingDraft(false);
              },
            });
          } else {
            createMutation({
              variables: {
                content: postContent,
                username,
                password,
              },
              onCompleted: () => {
                setPostContent("");
                toast.success("Post created!");
                setEditingDraft(false);
                location.reload();
              },
              onError: () => {
                setPostContent("");
                toast.error("Unable to create post!");
                setEditingDraft(false);
              },
            });
          }
        }}
        variant="primary"
      />
    </div>
  );

  const shouldShowEditDeleteSection = username === user.username;
  const goToUserPage = () => {
    if (!editable) {
      router.push("/user?user_id=" + user.id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-[500px] mx-auto my-2">
      <div className="flex items-start space-x-4">
        {/* User Avatar */}
        <div onClick={goToUserPage}>
          <UserAvatar initials={initials} />
        </div>

        {/* Post Input Section */}
        <div className="flex-grow">
          <div className="flex justify-between" onClick={goToUserPage}>
            <div
              className="text-gray-900 text-md font-bold"
              onClick={goToUserPage}
            >
              {user.username}
            </div>
            <div className="text-gray-500 text-sm pt-2">{postDate}</div>
          </div>
          <TextArea
            value={postContent}
            setValue={setPostContent}
            editable={editable || editingDraft}
          />
          {shouldShowEditDeleteSection && editOrDeleteSection}
          {editableButton}
        </div>
      </div>
    </div>
  );
}
