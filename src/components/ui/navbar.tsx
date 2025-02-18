"use client";

import type { Dispatch, SetStateAction } from "react";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { HamburgerItem } from "./hamburger-item";
import { MobileNavItem, DesktopNavItem } from "./nav-items";
import { Signin } from "../sign-in";

const MobileNav = ({
  setOpen,
  open,
  loc,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  loc: string;
}) => {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-neutral-900 z-10 transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className="flex flex-col mt-9 mx-4">
        <MobileNavItem
          name="Home"
          loc={loc}
          open={open}
          setOpen={setOpen}
          path="/"
        />

        <MobileNavItem
          name="Guestbook"
          loc={loc}
          open={open}
          setOpen={setOpen}
          path="/guestbook"
        />
        <Signin />
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="flex px-4 py-4 h-20 w-screen items-center">
      <MobileNav setOpen={setOpen} open={open} loc={pathname} />
      <div className="w-full flex justify-end items-center md:pr-10">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HamburgerItem position="top" open={open} />
          <HamburgerItem position="middle" open={open} />
          <HamburgerItem position="bottom" open={open} />
        </div>

        <div className="hidden mt-10 md:flex dark:text-slate-50 items-center">
          <DesktopNavItem name="Home" path="/" loc={pathname} />
          <DesktopNavItem name="Guestbook" path="/guestbook" loc={pathname} />
          <Signin />
        </div>
      </div>
    </nav>
  );
};
