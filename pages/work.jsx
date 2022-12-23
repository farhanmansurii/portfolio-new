import Head from "next/head";
import Link from "next/link";
import React from "react";
export default function work({ data }) {
  data = data.sort((a, b) => b.__v - a.__v);

  return (
    <div className="text-[#777777]/50 text-4xl  lg:text-6xl duration-150 w-[95%]  mx-auto ">
      <Head>
        <title>Works | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {data.map((e, i) => (
        <Link href={`/${e._id}`} key={i}>
          <div className="border-b-[1px] border-[#777777] hover:bg-[#777777] flex hover:text-[#111111]  hover:px-4  duration-200 py-4 ">
            {i < 9 ? (
              <div>
                <span className="text-lg">(0{i + 1})</span> {e.title}
              </div>
            ) : (
              <div>
                <span className="text-lg">({i + 1})</span> {e.title}
              </div>
            )}
          </div>
        </Link>
      ))}
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
