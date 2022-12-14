import Spline from '@splinetool/react-spline';
import React, { useState } from 'react';
export default function about() {
  const [showButton, setShowButton] = useState(false);

const handleScroll = () => {
  if (window.pageYOffset > 100) {
    setShowButton(true);
  } else {
    setShowButton(false);
  }
};

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};



  return (
    <div onScroll={handleScroll}>
      <div className=" h-100vh  bg-[#FDFFF7] text-4xl lg:text-6xl py-4 w-11/12 mx-auto">
        <div className="  flex flex-col lg:flex-row-reverse">
       <div className='w-10/12 mx-auto'>
         <Spline scene="https://prod.spline.design/sEsA41xs5a3ajCYW/scene.splinecode" />
        </div>
      <div className=' p-4' >
           I’m a front-end developer. With a focus on methodical code, I enjoy making websites that are innovative, user-focussed , designed for me and for people, accessible & performant .
        </div>
        </div>
      </div>
      <div className="flex w-11/12 mx-auto mt-[5rem] ">
        <div className="w-fit text-[#FDFFF7] lg:text-3xl  py-4  mx-auto">About me</div>
        <div className="h-100vh  bg-[#FDFFF7] lg:text-3xl px-6 py-4 w-11/12 mx-auto">
        Hi there! My name is Farhan Mansuri and I'm a fresher front-end developer with a passion for Front-End Developement. I also have some experience with back-end development, which gives me a well-rounded understanding of the web development process.<br/> {' '}<br/> I recently graduated with a Masters Degree in Computer Science from a S.K Somaiya College, where I learned the skills I need to build user-friendly and visually appealing web applications.<br/> {' '}<br/> I also have some experience with back-end development, which gives me a well-rounded understanding of the web development process.
          Whilst writing code is what I do, it’s my passion & appreciation of the arts . <br/> {' '}<br/>Over the years I’ve been fortunate enough to study,learn and explore the new technologies , I’m interested in all kinds of music, anime , movies, gaming, football and the great outdoors. I absolutely love animals specially cats.<br/> {' '}<br/> I’m always
          open to hearing about new projects and opportunities so please feel free to get in touch.
        </div>
      </div>
        <button onClick={handleClick}>Back to top</button>
    </div>
  );
}
