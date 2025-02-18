import React from "react";

type ItemProps = {
    position: "top" | "middle" | "bottom";
    open: boolean;
  };
  
  export const HamburgerItem: React.FC<ItemProps> = (({ position, open }) => {
    const classes =
      "h-1 w-full bg-slate-300 rounded-lg transform transition-all duration-300 ease-in-out";
  
    return (
      <>
        {position === "top" ? (
          <span
            className={`${classes} ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
        ) : position === "middle" ? (
          <span className={`${classes} ${open ? "ease-out opacity-0" : ""}`} />
        ) : (
          <span
          className={`${classes} ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        )}
      </>
    );
  });