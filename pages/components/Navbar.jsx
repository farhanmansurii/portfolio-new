import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={
        currentRoute === "/about" || currentRoute === "/[id]"
          ? "   fixed w-full mx-auto font-migra bg-[#bebebe]/20 z-50 text-[#262525] backdrop-blur-[1.5px] "
          : "fixed w-full mx-auto font-migra text-[#bebebe]  z-50 bg-[#262525]/20 backdrop-blur-[1.5px]"
      }
    >
      <div
        className={
          currentRoute === "/about" || currentRoute === "/[id]"
            ? "  text-lg lg:text-2xl flex justify-between mx-auto border-[#232323] w-[97%] pt-3 pb-2 border-b-[2px] capitalize "
            : "  text-lg lg:text-2xl flex justify-between mx-auto w-[97%] pt-3 border-[#bebebe] pb-2 border-b-[2px] capitalize "
        }
      >
        <div>
          <Link href="/">
            <div className="font-extrabold">FXR</div>
          </Link>
        </div>

        <div className="flex mx-2  gap-7 lg:10">
          <Link href="/">
            <div
              className={
                currentRoute === "/"
                  ? "italic underline decoration-1 hidden lg:block underline-offset-4"
                  : " "
              }
            >
              Home
            </div>
          </Link>
          <Link href="/about">
            <div
              className={
                currentRoute === "/about"
                  ? "italic underline decoration-1 underline-offset-4"
                  : ""
              }
            >
              About
            </div>
          </Link>

          <Link href="/work">
            <div
              className={
                currentRoute === "/work"
                  ? "italic underline decoration-1 underline-offset-4"
                  : ""
              }
            >
              Work
            </div>
          </Link>

          <Link href="/cv">
            <div
              className={
                currentRoute === "/cv"
                  ? "italic underline decoration-1 underline-offset-4"
                  : ""
              }
            >
              CV
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
