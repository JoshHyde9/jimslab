import Link from "next/link";
import { Signin } from "../sign-in";

export const Navbar = () => {
  return (
    <nav className="flex px-4 py-4 h-20 w-screen items-center">
      <div className="w-full flex justify-end items-center md:pr-10">
        <div className="mt-10 flex dark:text-slate-50 items-center">
          <Link
            href="/guestbook"
            className="px-4 transition ease-in-out duration-300 relative stroke hover:text-purple-300"
          >
            Guestbook
          </Link>
          <Signin />
        </div>
      </div>
    </nav>
  );
};
