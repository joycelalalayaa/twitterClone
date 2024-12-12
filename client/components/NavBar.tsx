import React from "react";
import { useRouter } from "next/navigation";
import LoginButtonSection from "./LoginButtonSection";

export default function NavBar(): JSX.Element {
  const router = useRouter();
  return (
    <nav className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Middle Section (Links) */}
        <ul className="flex space-x-6">
          <li>
            <a
              onClick={() => router.push("/")}
              //   href="/"
              className="hover:text-gray-200 transition duration-200"
            >
              Home
            </a>
          </li>
        </ul>

        {/* Right Section (User Actions) */}
        <LoginButtonSection/>
      </div>
    </nav>
  );
}
