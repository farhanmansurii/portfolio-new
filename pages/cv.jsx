import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
export default function cv() {
  const [loading, setLoading] = useState(true);

  return (
    <div className=" text-[#bebebe] ">
      {loading && (
          <div className="text-[#bebebe] w-full h-[400px] flex justify-center items-center">
          <PulseLoader color="#bebebe" className='w-fit'  /></div>
      )}
        <iframe
        src="https://drive.google.com/file/d/1mGb3NJ2yQHFOXJl1Q2km0eqE199JaHJQ/preview"
        className="w-full  aspect-auto h-[400px]"
        onLoad={() => setLoading(false)}
        />
    </div>
  );
}
