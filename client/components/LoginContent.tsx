import { graphql, useMutation } from "react-relay";
import { useContext, useState } from "react";
import TextInputField from "./TextInputField";
import Button from "./Button";
import { toast } from "react-toastify";
import { LoginContent_LoginMutation } from "./__generated__/LoginContent_LoginMutation.graphql";
import { AuthContext } from "./AuthContext";

const MUTATION = graphql`
  mutation LoginContent_LoginMutation($password: String!, $username: String!) {
    login(password: $password, username: $username) {
      id
      username
    }
  }
`;

export default function LoginContent(): JSX.Element {
  const [loginMutation, loggingIn] =
    useMutation<LoginContent_LoginMutation>(MUTATION);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setAuth} = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 text-gray-800">
      <div className="p-8 max-w-md w-full bg-white rounded-xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-4">
          Log in
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
          <Button
            variant="primary"
            label="Log in"
            disabled={loggingIn}
            onClick={() => {
              console.log(
                "Creating user with username: " +
                  username +
                  " password " +
                  password
              );

              loginMutation({
                variables: {
                  username,
                  password,
                },
                onCompleted: () => {
                  toast.success("Logged in!");
                  setAuth(username, password);
                  setUsername('');
                  setPassword('');
                },
                onError: (error) => {
                  console.log(error);
                  toast.error("Error logging in");
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
