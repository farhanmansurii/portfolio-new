import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={
        currentRoute === "/about"
          ? "   fixed w-full mx-auto font-migra bg-[#bebebe]/20  text-[#262525] backdrop-blur-[1.5px] "
          : "fixed w-full mx-auto font-migra text-[#bebebe]  bg-[#262525]/20 backdrop-blur-[1.5px]"
      }
    >
      <div
        className={
          currentRoute === "/about"
            ? "  text-lg lg:text-2xl flex justify-between mx-2 border-[#232323] w-[98%] pt-3 pb-2 border-b-[2px] capitalize "
            : "  text-lg lg:text-2xl flex justify-between mx-2 w-[98%] pt-3 border-[#bebebe] pb-2 border-b-[2px] capitalize "
        }
      >
        <div>
          <Link href="/">
            <div>farhan mansuri '98</div>
          </Link>
        </div>

        <div className="flex mx-2  gap-2 lg:gap-4">
          <Link href="/">
            <div
              className={
                currentRoute === "/"
                  ? "italic underline decoration-1 underline-offset-4"
                  : ""
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
