import Link from 'next/link';
import React from 'react';
export default function Navbar() {
  return (
    <div className="fixed w-full bg-[#111111]/40 backdrop-blur-[2px]">
      <div className="  text-lg lg:text-2xl flex justify-between mx-auto  w-[95%] pt-3 pb-2 border-b-[2px] capitalize border-[#bebebe]">
        <div>
          <Link href="/">
            <div className="hover:line-through   ease-in-out duration-200   ">farhan mansuri '98</div>
          </Link>
        </div>

        <div className="flex  gap-2 lg:gap-4">
          <Link href="/">
            <div className="hover:line-through ease-in-out duration-200   ">Home</div>
          </Link>
          <Link href="/about">
            <div className="hover:line-through ease-in-out duration-200   ">About</div>
          </Link>

          <Link href="/work">
            <div className="hover:line-through ease-in-out duration-200   ">Work</div>
          </Link>

          <Link href="/cv">
            <div className="hover:line-through ease-in-out duration-200   ">Resume</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
