import React from "react";
import { PiFilePdfFill } from "react-icons/pi";
import { MdOndemandVideo } from "react-icons/md";
import ReactPlayer from "react-player";
import { Checkbox, Label, Progress } from "flowbite-react";
import { FaStar } from "react-icons/fa";

export default function SessionCard({
  videos,
  pdfs,
  completion,
  onToggleCompletion,
}) {
  const calculateProgress = () => {
    const total = completion.length;
    const completed = completion.filter(Boolean).length;
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="flex mx-20 px-10">
      <div className="my-5 w-2/3 pr-5">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 mb-5"
          >
            <h1 className="text-4xl font-serif text-sky-600">
              Session {index + 1}
            </h1>
            <hr />
            <div className="flex justify-between items-center mt-5">
              <div className="flex items-center gap-6">
                {pdfs[index] && (
                  <a
                    href={pdfs[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiFilePdfFill size={30} />
                  </a>
                )}
                <MdOndemandVideo size={30} />
              </div>
              <div className="flex items-center">
                <Label className="mr-4">Completed</Label>
                <Checkbox
                  className="mr-2"
                  checked={completion[index]}
                  onChange={() => onToggleCompletion(index)}
                />
              </div>
            </div>
            <ReactPlayer url={video} controls width="100%" />
          </div>
        ))}
      </div>

      <div className="w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5 h-screen mt-5">
        <div className="mx-0 mb-5">
          <Label className="text-xl text-sky-600">Course Progress</Label>
          <Progress
            progress={calculateProgress()}
            color="indigo"
            className="w-full mt-2"
            size="xl"
            labelProgress
          />
        </div>
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <span className="text-gray-400 text-lg">(134K reviews)</span>
        </div>
        <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
        <p className="mb-1 text-2xl text-sky-600 dark:text-sky-600 font-bold">
          Beginner level
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Recommended experience
        </p>
        <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
        <p className="mb-1 text-2xl text-sky-600 dark:text-sky-600 font-bold">
          Flexible schedule
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Learn at your own pace
        </p>
        <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
        <p className="mb-1 text-2xl text-sky-600 dark:text-sky-600 font-bold">
          Earn degree credit
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Learn more
        </p>
        <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
        <p className="mb-1 text-2xl text-sky-600 dark:text-sky-600 font-bold">
          Time Duration
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          6 months at 10 hours a week
        </p>
        <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
        <p className="mb-2 text-2xl text-sky-600 dark:text-sky-600 font-bold">
          What you'll learn
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Extensive, informative and interesting video lecture
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          All Powerpoint Demonstrations Used in Course
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Coverage of all important primary Javascript concepts
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Complete Code demonstrated in lecture
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Instructor contact Email for questions and clarifications
        </p>
        <p className="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
          Lab Exercises
        </p>
      </div>
    </div>
  );
}
