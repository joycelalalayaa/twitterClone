import { graphql, useMutation } from "react-relay";
import { useContext, useState } from "react";
import TextInputField from "./TextInputField";
import Button from "./Button";
import { toast } from "react-toastify";
import useCookie from "react-use-cookie";
import { RegisterContent_CreateUserMutation } from "./__generated__/RegisterContent_CreateUserMutation.graphql";
import { AuthContext } from "./AuthContext";

const MUTATION = graphql`
  mutation RegisterContent_CreateUserMutation(
    $password: String!
    $username: String!
    $lastName: String!
    $firstName: String!
  ) {
    registerUser(
      password: $password
      username: $username
      lastName: $lastName
      firstName: $firstName
    ) {
      id
      username
    }
  }
`;

export default function LoginContent(): JSX.Element {
  const [createUser, creatingUser] =
    useMutation<RegisterContent_CreateUserMutation>(MUTATION);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { setAuth } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 text-gray-800">
      <div className="p-8 max-w-md w-full bg-white rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
          Create your account
        </h1>
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
            type="password"
            placeholder="Enter your password"
            maxLength={280}
          />{" "}
          <TextInputField
            value={firstName}
            onChange={setFirstName}
            placeholder="Enter your first name"
            maxLength={280}
          />{" "}
          <TextInputField
            value={lastName}
            onChange={setLastName}
            placeholder="Enter your last name"
            maxLength={280}
          />
          <Button
            variant="primary"
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
                  firstName,
                  lastName,
                  username,
                  password,
                },
                onCompleted: () => {
                  toast.success("Created a user");
                  setAuth(username, password);
                },
                onError: () => {
                  toast.error("Error creating a user");
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
