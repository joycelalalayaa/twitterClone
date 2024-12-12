import { useRouter } from "next/navigation";
import Button from "./Button";
import { graphql } from "relay-runtime";
import useCookie from "react-use-cookie";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { useLazyLoadQuery } from "react-relay";
import { LoginButtonSectionQuery } from "./__generated__/LoginButtonSectionQuery.graphql";
export default function LoginButtonSection(): JSX.Element {
  const router = useRouter();
  const { username } = useContext(AuthContext);
  if (username != null && username != "") {
    return <LoggedInSection />;
  }

  return (
    <div className="flex gap-4">
      <Button
        variant="secondary"
        label="Log in"
        onClick={() => router.push("/login")}
      />
      <Button
        variant="secondary"
        label="Sign up"
        onClick={() => router.push("/register")}
      />
    </div>
  );
}

const QUERY = graphql`
  query LoginButtonSectionQuery($password: String!, $username: String!) {
    genUser(password: $password, username: $username) @required(action: THROW) {
      id
      firstName
      lastName
    }
  }
`;

function LoggedInSection(): JSX.Element {
  const { username, password, setAuth } = useContext(AuthContext);
  const data = useLazyLoadQuery<LoginButtonSectionQuery>(QUERY, {
    username,
    password,
  });
  const { firstName, lastName } = data.genUser;
  return (
    <div className="flex gap-4">
      <div>
        Hello {firstName} {lastName}{" "}
      </div>
      <div
        className="underline text-white-700"
        onClick={() => {
          setAuth("", "");
        }}
      >
        {" "}
        Logged out
      </div>
    </div>
  );
}

// import { useRouter } from "next/navigation";
// import Button from "./Button";
// import { toast } from "react-toastify";
// import useCookie from "react-use-cookie";
// import { useState, useEffect } from "react";

// export default function LoginButtonSection(): JSX.Element {
//   const router = useRouter();
//   const [userCookie, setUserCookie] = useCookie("usernameCookie", "");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!userCookie);

//   useEffect(() => {
//     setIsLoggedIn(!!userCookie);
//   }, [userCookie]);

//   if (isLoggedIn) {
//     return <LoggedInSection setIsLoggedIn={setIsLoggedIn} />;
//   }

//   return (
//     <div className="flex gap-4">
//       <Button
//         variant="secondary"
//         label="Log in"
//         onClick={() => router.push("/login")}
//       />
//       <Button
//         variant="secondary"
//         label="Sign up"
//         onClick={() => router.push("/register")}
//       />
//     </div>
//   );
// }

// function LoggedInSection({
//   setIsLoggedIn,
// }: {
//   setIsLoggedIn: (loggedIn: boolean) => void;
// }): JSX.Element {
//   const [userCookie, setUserCookie, removeUserCookie] = useCookie(
//     "usernameCookie",
//     ""
//   );
//   const [passwordCookie, setPasswordCookie, removePasswordCookie] = useCookie(
//     "passwordCookie",
//     ""
//   );
//   const router = useRouter();

//   const handleLogout = () => {
//     // Remove cookies
//     removeUserCookie();
//     removePasswordCookie();

//     // Ensure state updates
//     setIsLoggedIn(false);

//     // Provide feedback
//     toast.success("Logged out successfully");

//     // Optional: Refresh the page or navigate to another route
//     router.push("/");
//   };

//   return (
//     <div className="flex gap-4">
//       <div>Logged in section</div>
//       <div
//         className="underline text-white-700 cursor-pointer"
//         onClick={handleLogout}
//       >
//         Log out
//       </div>
//     </div>
//   );
// }
