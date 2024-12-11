"use client";

import React from "react";
import HomeContent from "@/components/HomeContent";
import RelayEnvionrment from "@/components/RelayEnvionrment";
import { RelayEnvironmentProvider } from "react-relay";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvionrment}>
      <NavBar />
      <HomeContent />
    </RelayEnvironmentProvider>
  );
}
