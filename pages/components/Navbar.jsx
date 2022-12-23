import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export default function Navbar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="fixed w-full mx-auto bg-[#111111]/40 backdrop-blur-[2px]">
      <div className="  text-lg lg:text-2xl flex justify-between mx-2 w-[98%] pt-3 pb-2 border-b-[2px] capitalize border-[#777777]">
        <div>
          <Link href="/">
            <div>farhan mansuri '98</div>
          </Link>
        </div>

        <div className="flex mx-2  gap-2 lg:gap-4">
          <Link href="/">
            <div className={currentRoute === "/" ? "line-through" : ""}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className={currentRoute === "/about" ? "line-through" : ""}>
              About
            </div>
          </Link>

          <Link href="/work">
            <div
              className={
                currentRoute === "/work" ? "line-through italic font-thin" : ""
              }
            >
              Work
            </div>
          </Link>

          <Link href="/cv">
            <div className={currentRoute === "/cv" ? "line-through" : ""}>
              CV
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
