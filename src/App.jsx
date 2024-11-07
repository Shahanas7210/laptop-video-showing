import React from "react";
import { laptop, video } from "./assets";

const App = () => {
  return (
    <div className="">
      <div
        // style={{
        //   "background-image":
        //     "url('https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        // }}
        className="flex flex-col items-center justify-center m-0 p-0 relative bg-sky-950  h-[30vw] w-full text-center mt-64"
      >
        <img
          src={laptop}
          className="absolute w-[70vw] top-[-8.98vw] text-center"
          alt="laptop"
        />
        <video
          className="absolute top-[-4vw] w-[50%] h-[88%] bg-black rounded-[5px]"
          src={video}
          autoPlay={true}
          controls
          muted
        />
      </div>
    </div>
  );
};

export default App;
