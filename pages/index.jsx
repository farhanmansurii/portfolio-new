import Head from 'next/head';
import Link from 'next/link';
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
    <div className="text-[125px] lg:text-[244.554px] hilg:my-0 mx-auto leading-none">
       <Head>
        <title>Home | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='min-h-80vh justify-around'>
        <div className="flex flex-wrap tracking-tighter ">
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
          <div className="flex flex-wrap  tracking-tighter scale-[98%] ">
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
          <div className="text-2xl  h-fit lg:w-[350px] w-[95%]    mt-4 mx-auto">
            <span className="mr-3 text-[#323232]">ABOUT</span>
            Hi I'm Farhan mansuri, a developer based in Mumbai MH, India focused on creating elegant, simple, and intuitive web interfaces. Here you can find{' '}
            <span className="bg-[#777777] text-[#111111] px-1">
              <Link href="/about">about me</Link>
            </span>{' '}
            ,{' '}
            <span className="bg-[#777777] text-[#111111] px-1">
              <Link href="/work">Works</Link>
            </span>{' '}
            and my{' '}
            <span className="bg-[#777777] text-[#111111] px-1">
              <Link href="/work">CV</Link>
            </span>{' '}
            and also{' '}
            <span className="bg-[#777777] text-[#111111] px-1">
              {' '}
              <a href="mailto:mansurifarhanfm@gmail.com">Contact me.</a>
            </span>
          </div>
        </div>
      </div>
      <div className="my-12 text-4xl mx-auto grid justify-center place-content-center  space-y-6">
        <div className="text-4xl justify-center w-fit  "> Skills & Technology——</div>
        <div className="grid grid-cols-4 lg:grid-cols-8 w-fit  gap-9 ">
          <SiHtml5 className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiCss3 className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiJavascript className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiReact className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiRedux className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiNextdotjs className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiMongodb className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiExpress className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiNodedotjs className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiNodemon className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiFirebase className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiTailwindcss className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiChakraui className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiGit className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiPython className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
          <SiJenkins className="w-12 hover:scale-[120%] duration-200 h-12 hover:text-[#bebebe]" />
        </div>
      </div>
    </div>
  );
}
