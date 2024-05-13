import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  // Function to truncate the title if its length is over 10 characters
  const truncateTitle = (title) => {
    if (title.length > 34) {
      return title.slice(0, 34) + "...";
    }
    return title;
  };

  return (
    <div className="sm:flex gap-8 justify-center shadow-xl">
      <div className="max-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
        <a href={`/mycourse/${course._id}`}>
          <img
            className="rounded-t-lg h-72 min-w-full"
            src={course.photo}
            alt="Course Image"
          />
        </a>
        <div className="p-5">
          <a href={`/mycourse/${course._id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {truncateTitle(course.title)}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Start, switch, or advance your career with more than 6,900 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <Link to={`/mycourse/${course._id}`}>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-600 dark:hover:bg-sky-600 dark:focus:bg-sky-600"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
