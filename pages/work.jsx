import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
export default function work({ data }) {
  data = data.sort((a, b) => b.__v - a.__v);

  return (
    <div className="text-[#bebebe]/60 text-4xl font-neue  uppercase  lg:text-6xl duration-150 w-[95%] my-[4rem] mx-auto ">
      <Head>
        <title>Works | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence>
        {data.map((e, i) => (
          <Link href={`/${e._id}`} key={i}>
            <div className="border-b-[1px] py-4  border-[#bebebe]/60 hover:bg-[#bebebe] text-4xl lg:text-8xl flex hover:text-[#111111]  hover:px-4  duration-200  ">
              <motion.div
                key={e._id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {" "}
                {i < 9 ? (
                  <div>
                    <span className="text-xl italic  font-migra">
                      (0{i + 1})
                    </span>{" "}
                    {e.title}
                  </div>
                ) : (
                  <div>
                    <span className="text-lg">({i + 1})</span> {e.title}
                  </div>
                )}
              </motion.div>
            </div>
          </Link>
        ))}
      </AnimatePresence>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`https://productapi.vercel.app/api/project`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
