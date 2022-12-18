import React, { useState } from 'react';
export default function about() {
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);
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
      behavior: 'smooth',
    });
  };
  return (
    <div onScroll={handleScroll}>
      <div className=" h-100vh  bg-[#bebebe] text-4xl lg:text-6xl py-4 w-[95%] mx-auto">
        <div className="  flex flex-col lg:flex-row-reverse">
          {/* <div className=" w-fit mx-auto my-auto">
            {loading && (
              <div className="text-[#bebebe] w-[250px] h-[250px] flex justify-center items-center">
                <CircleSpinner size={30} color="#262525" loading={loading} />
              </div>
            )}
           <Spline scene="https://prod.spline.design/o9K2aFollWgnrqL9/scene.splinecode" onLoad={() => setLoading(false)} />
          </div> */}

          <div className=" p-4">
            I’m a front-end developer.I'm building minimal, modern, and beautiful websites, PWAs. I can be helpful to your company in creating digital products. </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-[95%] mx-auto mt-[5rem] ">
        <div className="w-full text-[#bebebe] lg:text-3xl  px-4 text-xl mx-auto text-end">About me</div>
        <div className="h-100vh  bg-[#bebebe] lg:text-3xl px-4 py-4  mx-auto">
          Hi there! My name is Farhan Mansuri and I'm a fresher front-end developer with a passion for Front-End Developement. I also have some experience with back-end development, which gives me a
          well-rounded understanding of the web development process.
          <br /> <br /> I recently graduated with a Masters Degree in Computer Science from a S.K Somaiya College, where I learned the skills I need to build user-friendly and visually appealing web
          applications.
          <br /> <br /> I also have some experience with back-end development, which gives me a well-rounded understanding of the web development process. Whilst writing code is what I do, it’s my
          passion & appreciation of the arts . <br /> <br />
          Over the years I’ve been fortunate enough to study,learn and explore the new technologies , I’m interested in all kinds of music, anime , movies, gaming, football and the great outdoors. I
          absolutely love animals specially cats.
          <br /> <br /> I’m always open to hearing about new projects and opportunities so please feel free to get in touch.
        </div>
      </div>
      <button className="fixed bottom-0 right-0 mb-10 lg:mb-11 mr-5 bg-[#262525] rounded-full border-2 border-[#bebebe] px-4 py-2  text-[#bebebe]" onClick={handleClick}>
        Back to top
      </button>
    </div>
  );
}
