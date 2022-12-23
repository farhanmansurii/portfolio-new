import Head from "next/head";
import React, { useState } from "react";
import Spinner from "react-spinner-material";
export default function cv() {
  const [loading, setLoading] = useState(true);
  return (
    <div className=" text-[#777777] ">
      <Head>
        <title>CV | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {loading && (
        <div className="flex justify-center items-center h-[400px]">
          <Spinner radius={60} color={"#777777"} stroke={8} visible={true} />
        </div>
      )}
      <iframe
        onLoad={() => setLoading(false)}
        src="https://drive.google.com/file/d/1T9-njWLhxgTl3jqmRg0aJZJf_ioasPal/preview"
        className=" h-[500px] w-full top-0 lg:w-[700px] mx-auto"
      />
    </div>
  );
}
