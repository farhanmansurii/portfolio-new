import Link from 'next/link';
import React from 'react';

export default function workdetail() {
  return (
    <div className="mx-auto w-11/12 h-100vh">
      <div className="flex flex-col lg:flex-row  gap-5">
        <div className="w-full">
          <img className="" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" />
          <div className="text-white   bottom-10 lg:bottom-16 relative ">
            <Link href={'/work'}>
              <div className="text-md px-4 bg-black/10 backdrop-blur-[2px] rounded-full w-fit">back to (All Projects)</div>
            </Link>
            <div className=" text-4xl lg:text-7xl">Title of the project</div>
          </div>
        </div>

        <div className="text-inherit text-md lg:text-xl my-6 lg:w-8/12">
          <div className="text-4xl text-gray-200 mb-3">Description</div>
          <div className="text-white/70">
            Microsite for our studio, where we design & build highly-crafted brands and sites for partners around the world. We have a particular focus on the sustainability, architectural, and
            creative arts sectors, and have been fortunate to collaborate with some great people.
          </div>
          <div className="flex justify-between  lg:flex my-10">
            <div className="text-white animate-pulse ">Visit Live Site</div>
            <div className="bg-white  px-4">Visit Github</div>
          </div>{' '}
          <div>
            <div className="text-white border-b-[1px] my-2  text-3xl border-gray-500 w-full ">TECH STACK</div>
            <div className="text-white border-b-[1px] my-4 border-gray-500 w-full ">NextJS</div>
            <div className="text-white border-b-[1px] my-4 border-gray-500 w-full ">TailwindCSS</div>
            <div className="text-white border-b-[1px] my-4  border-gray-500 w-full ">Firebase</div>
          </div>
        </div>
      </div>
    </div>
  );
}
