import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
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
  SiTailwindcss,
} from "react-icons/si";
export default function Home() {
  return (
    <div className="text-[125px] lg:text-[265.554px]   my-[4rem] mx-auto leading-none">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Head>
            <title>Home | Farhan Mansuri</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className="min-h-80vh z-0 my-3 w-full  grid lg:-space-y-16 text-[#858585] justify-around ">
            <div className="flex flex-wrap tracking-tighter  ">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex"
              >
                <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  F
                </motion.div>
                <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  r
                </motion.div>
                 <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  o
                </motion.div>
                 <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  n
                </motion.div>
                 <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  t
                </motion.div>
                 <motion.div  >
                  —
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex"
              >
                <div className="  hover:text-[#bebebe] duration-150 ease-in-out text-bebas">
                  —
                </div>
                 <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  e
                </motion.div>
                 <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  n
                </motion.div>
                 <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                  d
                </motion.div>
              </motion.div>
            </div>
            <div className="flex   lg:flex-row flex-col">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap  tracking-tighter  md:tracking-tight  ">
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    D
                  </motion.div>
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    E
                  </motion.div>
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    v
                  </motion.div>
                   <motion.div whileHover={{y:-5, rotate:'5deg', opacity:0.3}} >
                    e
                  </motion.div>
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    l
                  </motion.div>
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    o
                  </motion.div>
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    p
                  </motion.div>
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    e
                  </motion.div>
                   <motion.div whileHover={{y:-5,opacity:0.5, rotate:'5deg'}} >
                    r
                  </motion.div>
                </div>
              </motion.div>
              <div className="text-3xl  font-neue h-fit lg:w-[350px] w-[95%]    pt-5 mx-auto">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mx-3"
                >
                  <span className="mr-3 text-[#bebebe]/30 ">ABOUT</span>
                  Hi I'm Farhan mansuri, based in Mumbai MH, India focused on
                  creating elegant, simple, and intuitive web interfaces. Here
                  you can find{" "}
                  <span className="bg-[#777777] text-[#111111] px-1">
                    <Link href="/about">about me</Link>
                  </span>{" "}
                  ,{" "}
                  <span className="bg-[#777777] text-[#111111] px-1">
                    <Link href="/work">works</Link>
                  </span>{" "}
                  ,{" "}
                  <span className="bg-[#777777] text-[#111111] px-1">
                    <Link href="/work">CV</Link>
                  </span>{" "}
                  and also{" "}
                  <span className="bg-[#777777] text-[#111111] px-1">
                    {" "}
                    <a href="mailto:mansurifarhanfm@gmail.com">contact me.</a>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="my-12 text-4xl mx-auto grid justify-center place-content-center  space-y-6">
            <div className="text-4xl justify-center  font-migra font-semibold w-fit  ">
              {" "}
              Skills——
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-8 w-fit    gap-9 ">
              <SiHtml5 className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiCss3 className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiJavascript className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiReact className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiRedux className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiNextdotjs className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiMongodb className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiExpress className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiNodedotjs className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiNodemon className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiFirebase className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiTailwindcss className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiChakraui className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiGit className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiPython className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
              <SiJenkins className="w-12 hover:scale-[105%] text-[#bebebe]/60 duration-200 h-12 hover:text-[#bebebe]" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
