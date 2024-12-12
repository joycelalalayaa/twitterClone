"use client";

import React from "react";
import RelayEnvionrment from "@/components/RelayEnvionrment";
import { RelayEnvironmentProvider } from "react-relay";
import NavBar from "@/components/NavBar";
import RegisterContent from "@/components/RegisterContent";

export default function Home() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvionrment}>
      <NavBar />
      <RegisterContent />
    </RelayEnvironmentProvider>
  );
}
