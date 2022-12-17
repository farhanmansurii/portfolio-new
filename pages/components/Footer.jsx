import React from "react";

export default function Footer() {
  return (
    <div className="w-[95%] mx-auto text-md  bottom-0  lg:text-2xl border-t-2 py-4  text-[#bebebe] flex justify-between ">
      <div className="flex  space-x-3">
        <div>
          <a href="https://www.linkedin.com/in/farhan-mansuri-620918219/">
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://github.com/farhanmansurii">Github</a>
        </div>

        <div>
          <a href="mailto:mansurifarhanfm@gmail.com">Mail</a>
        </div>
      </div>
      <div className=" mx-4">built by farhan mansuri</div>
    </div>
  );
}
