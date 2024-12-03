"use client";

import React from "react";
import HomeContent from "@/components/HomeContent";
import RelayEnvionrment from "@/components/RelayEnvionrment";
import { RelayEnvironmentProvider } from "react-relay";

export default function Home() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvionrment}>
      <HomeContent />
    </RelayEnvironmentProvider>
  );
}
