import React from 'react';
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNodemon,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss
} from 'react-icons/si';
export default function Home() {
  return (
    <div className="text-[125px] lg:text-[244.554px] w-[98%] mx-auto leading-none">
      <div className="flex flex-wrap tracking-tight ">
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out   text-bebas">F</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">r</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">o</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">n</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">t</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">—</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out text-bebas">—</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">e</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">n</div>
        <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">d</div>
      </div>
      <div className="flex  lg:flex-row flex-col">
        <div className="flex flex-wrap  tracking-tighter   ">
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">D</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">E</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">v</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">e</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">l</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">o</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">p</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">e</div>
          <div className="  hover:text-[#bebebe] duration-150 ease-in-out  text-bebas">r</div>
        </div>
        <div className="text-2xl  h-fit lg:w-[350px]    mt-4 mx-auto">
          <span className="mr-3 text-[#323232]">ABOUT</span>
          Hi I'm Farhan mansuri ,I am a developer based in Mumbai MH, India focused on creating interactive digital experiences on the web.I build elegant, simple, and intuitive web interfaces that
          effectively communicate products to their intended users using modern web technologies{' '}
        </div>
      </div>
      <div className='my-10 text-4xl w-[98%] mx-auto'>
        Skills & Technologies
        <div className="grid grid-cols-4 mx-auto lg:grid-cols-8 w-fit  gap-9 ">
          <SiHtml5 className="w-12 h-12" />
          <SiCss3 className="w-12 h-12" />
          <SiJavascript className="w-12 h-12" />
          <SiReact className="w-12 h-12" />
          <SiRedux className="w-12 h-12" />
          <SiNextdotjs className="w-12 h-12" />
          <SiMongodb className="w-12 h-12" />
          <SiExpress className="w-12 h-12" />
          <SiNodedotjs className="w-12 h-12" />
          <SiNodemon className="w-12 h-12" />
          <SiFirebase className="w-12 h-12" />
          <SiTailwindcss className="w-12 h-12" />
          <SiChakraui className="w-12 h-12" />
          <SiGit className="w-12 h-12" />
          <SiPython className="w-12 h-12" />
          <SiJenkins className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}
