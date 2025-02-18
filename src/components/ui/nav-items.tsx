import type { Dispatch, SetStateAction } from "react";

import Link from "next/link";

type NavItemProps = {
  name: string;
  path: string;
  loc: string;
};

type MobileNavItemProps = NavItemProps & {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
};

export const DesktopNavItem = ({ path, name, loc }: NavItemProps) => {
    return (
      <Link
        href={path}
        className={`px-4 transition ease-in-out duration-300 relative ${
          loc === path ? "text-purple-500" : "stroke hover:text-purple-300"
        }`}
      >
        {name}
      </Link>
    );
  };
  
  export const MobileNavItem = ({
    name,
    loc,
    path,
    setOpen,
  }: MobileNavItemProps) => {
    return (
      <a
        className={`text-xl font-normal my-4 ${
          loc === path && "text-purple-500"
        }`}
        href={path}
        onClick={() => setOpen(false)}
      >
        {name}
      </a>
    );
  };
  