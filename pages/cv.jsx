import Head from "next/head";
import React from "react";
export default function cv() {
  return (
    <div className=" text-[#777777] ">
       <Head>
        <title>CV | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <iframe
        
        src ='https://drive.google.com/file/d/1T9-njWLhxgTl3jqmRg0aJZJf_ioasPal/preview' className=" h-[500px] w-full lg:w-[700px] mx-auto"
        />
    </div>
  );
}
