import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React from "react";
export default function about() {
  return (
    <div className="font-migra  min-h-screen bg-[#bebebe] ">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Head>
            <title>About | Farhan Mansuri</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className="flex flex-col lg:flex-row gap-5 w-[95%] mx-auto my-[4rem]">
            <div className="w-full text-[#111111] font-neue text-3xl  px-4 lg:text-4xl mx-auto pt-4 ">
              About me
            </div>
            <div className="h-100vh   text-[#111111] font-neue font-extralight text-4xl px-4  mx-auto">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
               {' '}Hi there! My name is <span className="underline"> Farhan Mansuri </span> and I'm a fresher with a passion for <span className="underline">  Front-End Developement</span>. I also have experience with back-end development, which gives me a well-rounded understanding of the web development process.<br />
                <br />

                I recently graduated with a <span className="underline"> Masters Degree  in Computer Science </span> from  <span className="underline">S.K Somaiya College</span> , where I learned the skills I need to build user-friendly and visually appealing web applications.
                <br />
                <br />

                Over the years I’ve been fortunate enough to study,learn and explore the new technologies , I’m interested in all kinds of music, anime , movies, gaming, football and the great outdoors. I absolutely love animals specially cats.
                <br />
                <br />

                I’m always open to hearing about new projects and opportunities so please feel free to  <span className="underline">get in touch</span>.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
