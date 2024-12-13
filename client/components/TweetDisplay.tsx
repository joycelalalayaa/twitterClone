import { graphql } from "relay-runtime";
import { TweetDisplay_post$key } from "./__generated__/TweetDisplay_post.graphql";
import { useFragment } from "react-relay";
import PostBox from "./PostBox";

const FRAGMENT = graphql`
  fragment TweetDisplay_post on Post {
    id
    content
    genAuthor {
      firstName
      lastName
      ...PostBox_user
    }
    updatedAt
  }
`;

interface Props {
  post: TweetDisplay_post$key;
}

export default function TweetDisplay({ post: post$key }: Props): JSX.Element {
  const post = useFragment(FRAGMENT, post$key);
  const author = post.genAuthor;
  const isoDate = post.updatedAt;
  const prettyDate = new Date(isoDate).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  return (
    <>
      <PostBox
        user={author}
        editable={false}
        postInitialContent={post.content}
        postDate={prettyDate}
        postId={post.id}
      />
    </>
  );
}
