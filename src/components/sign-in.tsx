"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const Signin = () => {
  const { data: session } = useSession();
  return (
    <button
      className="w-full flex justify-center bg-purple-500 font-bold py-2 px-4 rounded-md duration-300 text-white hover:bg-purple-400 hover:cursor-pointer disabled:cursor-not-allowed"
      onClick={() => { if (!session) {
        signIn("github") 
      } else signOut() }}
    >
      {session ? "Sign out" : "Sign in"}
    </button>
  );
}
