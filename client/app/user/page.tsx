"use client";

import React, { useEffect, useState } from "react";
import RelayEnvionrment from "@/components/RelayEnvionrment";
import { RelayEnvironmentProvider } from "react-relay";
import NavBar from "@/components/NavBar";
import { AuthContextProvider } from "@/components/AuthContext";
import UserContent from "@/components/UserContent";

export default function UserPage() {
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
        <UserContent />
      </AuthContextProvider>
    </RelayEnvironmentProvider>
  );
}
