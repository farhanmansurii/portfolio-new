import React from "react";

export default function Footer() {
  return (
    <div className="w-[95%] mx-auto text-md flex-col lg:flex-row  bottom-0  lg:text-2xl border-[#777777] border-t-2 py-4  text-[#777777] flex justify-between ">
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
          <a href="mailto:mansurifarhanfm@gmail.com">e-Mail</a>
        </div>
      </div>
      <div className=" mx-auto">built with 💕 by farhan mansuri</div>
    </div>
  );
}
