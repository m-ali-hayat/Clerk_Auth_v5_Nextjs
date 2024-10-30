import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const { userId } = await auth();
  return (
    <div className="bg-cyan-950 rounded-b-xl">
      <ul className="flex justify-between py-4 px-6">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/client">
            <li>Client Page</li>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          {!userId ? (
            <>
              <SignInButton mode="modal">
                <li className="py-1 px-2 border rounded-lg cursor-pointer">
                  Sign In / Sign Up{" "}
                </li>
              </SignInButton>
              {/* <Link href="/sign-in">
                <li>Log In</li>
              </Link>
              <Link href="/sign-up">
                <li>Sign UP</li>
              </Link> */}
            </>
          ) : (
            <>
              <Link href="/profile">
                <li>Profile</li>
              </Link>

              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
