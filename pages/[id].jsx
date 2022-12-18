import Link from 'next/link';
import React from 'react';
export default function workdetail({ data }) {
  return (
    <div className="mx-auto w-11/12 ">
      <div className="flex flex-col lg:flex-row gap-5  ">
        <div>
          <Link href="/work">
            <div className=" flex my-4 text-sm text-[#777777] border-[1px] w-fit px-4 rounded-full py-1">Back to all works</div>
          </Link>
          <div className="  w-full -z-50">
            <img src={data.image} className="w-full" />
          </div>
          <div className="text-[#777777]  space-y-3 mt-3">
            <div className=" text-4xl lg:text-6xl">{data.title}</div>
          </div>
        </div>

        <div className="text-inherit text-md lg:text-xl my-6  lg:w-8/12">
          <div className="text-xl  text-[#777777] mb-3 underline underline-offset-auto">Description</div>
          <div className="text-[#777777]/70">{data.description}</div>
          <div className="flex justify-between  lg:flex my-10">
            {data.liveLinks !== '-' && (
              <div className="text-[#777777] animate-pulse flex gap-2 my-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>

                <a href={data.liveLinks}>Visit Live Site</a>
              </div>
            )}
            <div className="bg-[#111111] py-2 px-4 hover:scale-95 duration-150">
              <a href={data.github}>Visit Github</a>
            </div>
          </div>{' '}
          <div>
            <div className="text-[#777777] border-b-[1px] my-2  text-3xl border-[#777777] w-full ">TECH STACK</div>
            {data?.techStack.map(
              (e, i) =>
                e !== '' && (
                  <div key={i} className="text-[#777777] border-b-[1px] my-4 border-[#777777] w-full ">
                    {e}
                  </div>
                )
            )}
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
