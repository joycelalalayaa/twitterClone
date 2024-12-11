"use client";

import React from "react";
import RelayEnvionrment from "@/components/RelayEnvionrment";
import { RelayEnvironmentProvider } from "react-relay";
import NavBar from "@/components/NavBar";
import LoginContent from "@/components/LoginContent";

export default function Home() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvionrment}>
      <NavBar />
      <LoginContent />
    </RelayEnvironmentProvider>
  );
}
