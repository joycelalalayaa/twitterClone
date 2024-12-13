import { graphql } from "relay-runtime";
import { useLazyLoadQuery } from "react-relay";
import { UserContentQuery } from "./__generated__/UserContentQuery.graphql";
import TweetDisplay from "./TweetDisplay";

const QUERY = graphql`
  query UserContentQuery($user_id: String!) {
    genUserByID(user_id: $user_id) {
      id
      firstName
      lastName
      username
      genPosts {
        id
        ...TweetDisplay_post
      }
    }
  }
`;

export default function UserContent(): JSX.Element {
  const urlParams = new URLSearchParams(window.location.search);
  const user_id = urlParams.get("user_id");
  const data = useLazyLoadQuery<UserContentQuery>(QUERY, {
    user_id: user_id ?? "",
  });
  const firstName = data.genUserByID?.firstName;
  const lastName = data.genUserByID?.lastName;
  const allPosts = data.genUserByID?.genPosts ?? [];

  // Get a specific parameter

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 text-gray-800">
      {" "}
      <div className="text-5xl">
        {firstName} {lastName} ({data.genUserByID?.username})&apos;s Recent
        Posts
      </div>
      <div>
        {allPosts.map((post) => (
          <TweetDisplay key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
