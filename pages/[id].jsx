import Link from 'next/link';
import React from 'react';

export default function workdetail({ data }) {
  return (
    <div className="mx-auto w-11/12 ">
      <div className="flex flex-col lg:flex-row gap-5  ">
        <div className=" my-auto w-full">
          <img className='my-auto' src={data.image} />
          <div className="text-[#bebebe]   bottom-10 lg:bottom-16 relative ">
            <Link href={'/work'}>
              <div className="text-md px-4 py-2 mx-3 flex gap-2 bg-black/10 hover:bg-[#262525]/60 duration-150  backdrop-blur-[2px] rounded-full w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                ( All Projects )
              </div>
            </Link>
            <div className=" text-5xl lg:text-7xl">{data.title}</div>
          </div>
        </div>

        <div className="text-inherit text-md lg:text-xl lg:my-6 lg:w-8/12">
          <div className="text-2xl text-gray-200 mb-3">Description</div>
          <div className="text-[#bebebe]/70">{data.description}</div>
          <div className="flex justify-between  lg:flex my-10">
            <div className="text-[#bebebe] animate-pulse flex gap-2 my-auto ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <a href={data.liveLinks}>
              Visit Live Site</a>
            </div>
            <div className="bg-[#bebebe] py-2 px-4 hover:scale-95 duration-150"><a href={data.github}>
              Visit Github</a></div>
          </div>{' '}
          <div>
            <div className="text-[#bebebe] border-b-[1px] my-2  text-3xl border-gray-500 w-full ">TECH STACK</div>
            {data?.techStack.map((e, i) => (
              <div key={i} className="text-[#bebebe] border-b-[1px] my-4 border-gray-500 w-full ">
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(`https://productapi.vercel.app/api/project/${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
};
