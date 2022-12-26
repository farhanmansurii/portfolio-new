import Head from "next/head";
import React from "react";
export default function about() {
  return (
    <div className="font-migra  min-h-screen bg-[#bebebe] ">
      <Head>
        <title>About | Farhan Mansuri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col lg:flex-row gap-5 w-[95%] mx-auto my-[4rem]">
        <div className="w-full text-3xl  px-4 lg:text-4xl mx-auto pt-4 ">
          About me
        </div>
        <div className="h-100vh  text-[#111111]  font-extralight text-3xl px-4  mx-auto">
          (◕‿◕) Hi there! My name is Farhan Mansuri and I'm a fresher front-end
          developer with a passion for Front-End Developement. I also have some
          experience with back-end development, which gives me a well-rounded
          understanding of the web development process.
          <br /> <br /> I recently graduated with a Masters Degree in Computer
          Science from S.K Somaiya College, where I learned the skills I need to
          build user-friendly and visually appealing web applications.
          <br /> <br /> I also have some experience with back-end development,
          which gives me a well-rounded understanding of the web development
          process. Whilst writing code is what I do, it’s my passion &
          appreciation of the arts . <br /> <br />
          Over the years I’ve been fortunate enough to study,learn and explore
          the new technologies , I’m interested in all kinds of music, anime ,
          movies, gaming, football and the great outdoors. I absolutely love
          animals specially cats.
          <br /> <br /> I’m always open to hearing about new projects and
          opportunities so please feel free to get in touch.
        </div>
      </div>
    </div>
  );
}
