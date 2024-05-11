import React from "react";
import { PiFilePdfFill } from "react-icons/pi";
import { MdOndemandVideo } from "react-icons/md";
import ReactPlayer from "react-player";
import { Checkbox, Label } from "flowbite-react";

export default function SessionCard({ videos, pdfs }) {
  return (
    <div className="my-5 px-32">
      {videos.map((video, index) => (
        <div key={index} className="max-w-full w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
          <h1 className="text-4xl font-serif text-sky-600">Session {index + 1}</h1>
          <hr />
          {/* Icons Section */}
          <div className="flex justify-between">
            <div className="flex justify-center items-center mt-5 gap-6">
              {/* Check if a corresponding PDF exists for this video */}
              {pdfs[index] ? (
                <a href={pdfs[index]} target="_blank" rel="noopener noreferrer">
                  <PiFilePdfFill size={30} />
                </a>
              ) : null}
              <MdOndemandVideo size={30} />
            </div>
            <div className="mt-5">
              <Label className="mr-4 mt-5">Completed</Label>
              <Checkbox className="mr-2 size-6 "></Checkbox>
            </div>
          </div>
          {/* Video Player Section */}
          <div className="mb-4">
            <ReactPlayer url={video} controls width="100%" />
          </div>
        </div>
      ))}
    </div>
  );
}
