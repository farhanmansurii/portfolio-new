import { useRouter } from "next/router";
import React from "react";

export default function Footer() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div
      className={
        currentRoute === "/about" || currentRoute === "/[id]"
          ? "w-full mx-auto text-md flex-col lg:flex-row  bottom-0  border-spacing-3 lg:text-2xl bg-[#bebebe]   text-[#262525] font-migra border-[#262525] border-t-2 py-4  flex justify-between "
          : "w-full mx-auto text-md flex-col lg:flex-row  bottom-0  lg:text-2xl border-[#bebebe] border-t-2 py-4 font-migra   text-[#bebebe] flex justify-between "
      }
    >
      <div className="flex mx-auto  space-x-10">
        <div>
          <a href="https://www.linkedin.com/in/farhan-mansuri-620918219/">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/farhanmansurii">Github</a>
        </div>

        <div>
          <a href="mailto:mansurifarhanfm@gmail.com">E-Mail</a>
        </div>
      </div>
      <div className=" mx-auto">built by Farhan—Mansuri</div>
    </div>
  );
}
