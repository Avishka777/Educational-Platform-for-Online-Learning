import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

export default function StudentFeedback() {
  return (
    <div className="sm:flex gap-5">
      <div class="sm:w-1/4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div class="p-5">
          <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            This course was short but very informative and very helpful for an
            aspiring leader like myself. It also helped me understand how to
            view or underst...
          </p>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStarHalfStroke color="yellow" />
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              4.5
            </span>
          </div>
        </div>
      </div>

      <div class="sm:w-1/4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div class="p-5">
          <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            The course is very to the point and has a good structure. It does
            not only teach you how to provide proper feedback, but also how to
            provide feedba...
          </p>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
        </div>
      </div>

      <div class="sm:w-1/4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div class="p-5">
          <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            I learned a lot from this course. It gave the psychological
            background in addition to instructions in how to give feedback.
            Learning the Why mad...
          </p>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
        </div>
      </div>

      <div class="sm:w-1/4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <div class="p-5">
          <p class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Great Course. I love the way it is designed, delivered. I learned a
            lot. The most imporatnt part is that I enjoy every bit of the
            session and compl...
          </p>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar />
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              4.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
