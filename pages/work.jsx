import Link from 'next/link';
import React, { useState } from 'react';
export default function work() {
  const [showImage, setShowImage] = useState(false);

  const handleMouseEnter = () => {
    setShowImage(true);
  };

  const handleMouseLeave = () => {
    setShowImage(false);
  };
  return (
    <div className='text-[#bebebe]/20 text-4xl lg:text-7xl duration-150 w-11/12 mx-auto '>
      <div  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className='border-b-[1px] hover:bg-[#bebebe] flex hover:text-[#262525]  hover:px-4  duration-150 py-4 '>
        <Link href='/workdetail' >
        <div>
        <span className='text-lg'>(01)</span> Portfolio</div> 
        </Link>
        {showImage && ( <img className="absolute w-[100px] lg:w-[300px] right-4" src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80'/>)}</div>

      <div className='border-b-[1px] hover:bg-[#bebebe] hover:text-[#262525]  hover:px-4 duration-150 py-4'><span className='text-lg'>(02)</span> E-commerce</div>
      <div className='border-b-[1px] hover:bg-[#bebebe] hover:text-[#262525]  hover:px-4 duration-150 py-4'><span className='text-lg'>(03)</span> SpicyAnime</div>    
      <div className='border-b-[1px] hover:bg-[#bebebe] hover:text-[#262525]  hover:px-4 duration-150 py-4'><span className='text-lg'>(04)</span> To-do App</div>    
      <div className='border-b-[1px] hover:bg-[#bebebe] hover:text-[#262525]  hover:px-4 duration-150 py-4'><span className='text-lg'>(05)</span> Javascript Game</div>    
    </div>
  )
}
