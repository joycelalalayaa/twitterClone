import { graphql, useLazyLoadQuery } from "react-relay";
import PostBox from "./PostBox";
import { useContext, useLayoutEffect } from "react";
import { AuthContext } from "./AuthContext";
import { HomeContentQuery } from "./__generated__/HomeContentQuery.graphql";

const QUERY = graphql`
  query HomeContentQuery($password: String!, $username: String!) {
    genUser(password: $password, username: $username) {
      id
      firstName
      lastName
      ...PostBox_user
    }
  }
`;

export default function HomeContent(): JSX.Element {
  const{username, password} = useContext(AuthContext);
  const data = useLazyLoadQuery<HomeContentQuery>(QUERY, {
    username,
    password,

  });
  const user = data.genUser;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 text-gray-800">
      {" "}
      {user != null && <PostBox user ={user}/>}
    </div>
  );
}
