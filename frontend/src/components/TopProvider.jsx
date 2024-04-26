import React from 'react'
import Avishka from '../assets/users/avishka.jpg';
import Pasan from '../assets/users/pasan.jpg';
import Dhana from '../assets/users/dhana.jpg';
import Dimi from '../assets/users/dimi.jpg';

export default function TopProvider() {
  return (
    <div className='min-w-full sm:flex gap-5 mt-5 '>
                
        <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
            <div class="flex flex-col items-center py-10 mx-4">
                <img class="w-32 h-32 mb-3 rounded-full" src={Avishka} alt="Avishka image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Avishka Rathnakumara</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About</a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Courses</a>
                </div>
            </div>
        </div>

        <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
            <div class="flex flex-col items-center py-10 mx-4">
                <img class="w-32 h-32 mb-3 rounded-full" src={Dhana} alt="Dhana image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Dhananjaya Lakshan</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About</a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Courses</a>
                </div>
            </div>
        </div>

        <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
            <div class="flex flex-col items-center py-10 mx-4">
                <img class="w-32 h-32 mb-3 rounded-full" src={Pasan} alt="PAsan image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Pasan Frenando</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About</a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Courses</a>
                </div>
            </div>
        </div>

        <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
            <div class="flex flex-col items-center py-10 mx-4">
                <img class="w-32 h-32 mb-3 rounded-full" src={Dimi} alt="Dimi image"/>
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Dimi kanchana</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</span>
                <div class="flex mt-4 md:mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">About</a>
                    <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Courses</a>
                </div>
            </div>
        </div>


    </div>
  )
}
