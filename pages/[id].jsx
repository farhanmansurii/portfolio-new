import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
export default function workdetail({ data }) {
  return (
    <div className="w-full bg-[#bebebe] min-h-screen text-[#232323] ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-[98%] font-neue pt-[4rem] ">
          <Head>
            <title>{data.title} | Farhan Mansuri</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <div className="flex flex-col lg:flex-row gap-5  ">
            <div>
              <div className="  w-full -z-50">
                <img src={data.image} className="w-full " />
              </div>
              <div className="bg-[#bebebe]  space-y-3 mt-3">
                <div className=" text-4xl lg:text-7xl uppercase">
                  {data.title}
                </div>
              </div>
            </div>

            <div className="text-inherit text-xl lg:text-3xl  my-6  lg:w-8/12">
              <div className="  capitalize  bg-[#bebebe] mb-3 underline underline-offset-auto">
                Description
              </div>
              <div className="bg-[#bebebe] text-xl lg:text-3xl  ">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {data.description}
                </motion.div>
              </div>
              <div className="flex justify-between  lg:flex my-10">
                {data.liveLinks !== "-" && (
                  <div className="bg-[#bebebe] animate-pulse flex gap-2 my-auto ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                      />
                    </svg>

                    <a href={data.liveLinks}>Visit Live Site</a>
                  </div>
                )}
                <div className="bg-[#111111]  text-[#bebebe] py-2 px-4 hover:scale-95 duration-150">
                  <a href={data.github}>Visit Github</a>
                </div>
              </div>{" "}
              <div className=" ">
                <div className="bg-[#bebebe]   border-b-[4px] my-2  text-4xl border-[#232323] w-full ">
                  TECH STACK——
                </div>
                {data?.techStack.map(
                  (e, i) =>
                    e !== "" && (
                      <div
                        key={i}
                        className="text-[#232323] hover:bg-[#232323] hover:text-[#bebebe] uppercase text-3xl border-b-[1px] py-3 border-[#232323] hover:pl-6 duration-150 w-full "
                      >
                        {e}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://productapi.vercel.app/api/project/${params.id}`
  );
  const data = await res.json();
  return {
    props: { data },
  };
};
