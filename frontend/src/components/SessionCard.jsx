import React from "react";
import { PiFilePdfFill } from "react-icons/pi";
import { MdOndemandVideo } from "react-icons/md";
import ReactPlayer from "react-player";

export default function SessionCard() {
  // Dummy video URL
  const videoUrl =
    "https://firebasestorage.googleapis.com/v0/b/mern-blog-7cc30.appspot.com/o/1715342034002_istockphoto-1305811497-640_adpp_is.mp4?alt=media&token=98080370-d91d-4843-8083-44bcd5871218";

  return (
    <div className="my-5 px-32">
      <div className="max-w-full w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
        <h1 className="text-4xl font-serif text-sky-600">Session 1</h1>
        <hr />
        {/* Icons Section */}
        <div className="justify-center items-center mt-5 gap-6">
          <PiFilePdfFill size={30} />
          <MdOndemandVideo size={30} />
        </div>
        {/* Video Player Section */}
        <div className="mb-4">
          <ReactPlayer url={videoUrl} controls width="100%" />
        </div>
      </div>
      
    </div>
  );
}
