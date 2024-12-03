import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { HomeContentQuery } from "./__generated__/HomeContentQuery.graphql";
import { useState } from "react";
import TextInputField from "./TextInputField";
import Button from "./Button";

const QUERY = graphql`
  query HomeContentQuery {
    addNumbers(b: 7, a: 8)
  }
`;

const MUTATION = graphql`
  mutation HomeContentCreateUserMutation(
    $username: String!
    $password: String!
  ) {
    createUser(username: $username, password: $password) {
      id
      username
      password
    }
  }
`;

export default function HomeContent(): JSX.Element {
  const _result = useLazyLoadQuery<HomeContentQuery>(QUERY, {});
  const [createUser, creatingUser] = useMutation(MUTATION);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 text-gray-800">
      <div className="p-8 max-w-md w-full bg-white rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Join the conversation with your account or create a new one!
        </p>
        <div className="flex flex-col gap-5">
          <TextInputField
            value={username}
            onChange={setUsername}
            placeholder="Enter your username"
            maxLength={280}
          />
          <TextInputField
            value={password}
            onChange={setPassword}
            placeholder="Enter your password"
            maxLength={280}
          />
          <Button
            label="Create Account"
            disabled={creatingUser}
            onClick={() => {
              console.log(
                "Creating user with username: " +
                  username +
                  " password " +
                  password
              );

              createUser({
                variables: {
                  username,
                  password,
                },
                onCompleted: () => {
                  console.log("Created a user");
                },
                onError: () => {
                  console.log("Error creating a user");
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
