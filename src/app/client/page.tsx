"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

const ClientPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  // for debugging
  //   console.log("User from client ::", user);

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center text-2xl h-full">
      Hello, {user.firstName || user.username} welcome to Clerk.
    </div>
  );
};

export default ClientPage;
