import React, { createContext, useState, ReactNode } from "react";
import useCookie from "react-use-cookie";

interface AuthContextType {
  username: string;
  password: string;
  setAuth: (username: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  username: "",
  password: "",
  setAuth: () => alert("Still setting up"),
});

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userCookie, setUsernameCookie, removeUsernameCookie] =
    useCookie("usernameCookie");
  const [passwordCookie, setPasswordCookie, removePasswordCookie] =
    useCookie("passwordCookie");
  const [username, setUsername] = useState(userCookie);
  const [password, setPassword] = useState(passwordCookie);

  const setAuth = (username: string, password: string) => {
    setUsername(username);
    setPassword(password);
    setUsernameCookie(username);
    setPasswordCookie(password);
  };

  return (
    <AuthContext.Provider value={{ username, password, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
