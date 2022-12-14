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
              <div className="text-md px-4 py-2 mx-3 flex gap-2 bg-black/10 hover:bg-[#262525]/60 duration-150  backdrop-blur-[2px] rounded-full w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                ( All Projects )
              </div>
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
            <div className="text-white animate-pulse flex gap-2 my-auto ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              Visit Live Site
            </div>
            <div className="bg-white py-2 px-4 hover:scale-95 duration-150">Visit Github</div>
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
