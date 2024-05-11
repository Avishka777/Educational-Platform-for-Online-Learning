import React from 'react';
import Slide1 from '../assets/slide/Slide1.png';
import Slide2 from '../assets/slide/Slide2.png';
import Slide3 from '../assets/slide/Slide3.png';
import { Link } from 'react-router-dom';

export default function CourseCard({course}) {
  return (
    
    <div className='sm:flex gap-8 justify-center'>    
        <div class="max-w-1/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
            <a href="#">
                <img class="rounded-t-lg" src={course.photo} alt="Course Image" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
             <Link to={`/mycourse/${course._id}`}>
             <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
             </Link>
            </div>
        </div>
    </div>
    


);
}