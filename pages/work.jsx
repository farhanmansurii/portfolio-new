import Link from 'next/link';
import React, { useState } from 'react';
export default function work({ data }) {
  console.log(data);
  const [showImage, setShowImage] = useState(false);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };
  return (
    <div className="text-[#bebebe]/50 text-4xl lg:text-6xl duration-150 w-[95%]  mx-auto ">
      {data.map((e, i) => (
        <Link href={`/${e._id}`} key={i}>
          <div className="border-b-[1px] hover:bg-[#bebebe] flex hover:text-[#262525]  hover:px-4  duration-200 py-4 ">
            <div>
              <span className="text-lg">(0{i + 1})</span> {e.title}
            </div>
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
