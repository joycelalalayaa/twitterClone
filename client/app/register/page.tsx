'use client';

import React, { useEffect, useState } from "react";
import RelayEnvionrment from "@/components/RelayEnvionrment";
import { RelayEnvironmentProvider } from "react-relay";
import NavBar from "@/components/NavBar";
import RegisterContent from "@/components/RegisterContent";

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
      <NavBar />
      <RegisterContent />
    </RelayEnvironmentProvider>
  );
}
