import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar(): JSX.Element {
    const router = useRouter();
  return (
    <nav className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Middle Section (Links) */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-gray-200 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#explore"
              className="hover:text-gray-200 transition duration-200"
            >
              Explore
            </a>
          </li>
          <li>
            <a
              href="#notifications"
              className="hover:text-gray-200 transition duration-200"
            >
              Notifications
            </a>
          </li>
          <li>
            <a
              href="#profile"
              className="hover:text-gray-200 transition duration-200"
            >
              Profile
            </a>
          </li>
        </ul>

        {/* Right Section (User Actions) */}
        <Button variant = "secondary" label = "log in" onClick={()=> router.push("/login")}/>
      </div>
    </nav>
  );
}
