import React, { useState } from "react";
import { graphql } from "relay-runtime";
import { PostBox_user$key } from "./__generated__/PostBox_user.graphql";
import { useFragment } from "react-relay";

const FRAGMENT = graphql`
  fragment PostBox_user on User {
    firstName
    lastName
  }
`;

interface Props {
  user: PostBox_user$key;
}
export default function PostBox({ user: user$key }: Props): JSX.Element {
  const user = useFragment<PostBox_user$key>(FRAGMENT, user$key);
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = () => {
    if (postContent.trim() === "") {
      alert("Post content cannot be empty!");
      return;
    }
    console.log("New Post:", postContent);
    setPostContent("");
  };

  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-lg mx-auto">
      <div className="flex items-start space-x-4">
        {/* User Avatar */}
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {initials}
        </div>

        {/* Post Input Section */}
        <div className="flex-grow">
          <textarea
            className="w-full bg-gray-100 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="What's happening?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
              onClick={handlePostSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
