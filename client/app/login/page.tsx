'use client';

import React, { useEffect, useState } from "react";
import RelayEnvionrment from "@/components/RelayEnvionrment";
import { RelayEnvironmentProvider } from "react-relay";
import NavBar from "@/components/NavBar";
import LoginContent from "@/components/LoginContent";
import { AuthContextProvider } from "@/components/AuthContext";

export default function Home() {
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
  }, [setInitialRender]);

  if (initialRender) {
    return <div>Loading...</div>;
  }
  return (
    <RelayEnvironmentProvider environment={RelayEnvionrment}>
      <AuthContextProvider>
        <NavBar />
        <LoginContent />
      </AuthContextProvider>
    </RelayEnvironmentProvider>
  );
}
