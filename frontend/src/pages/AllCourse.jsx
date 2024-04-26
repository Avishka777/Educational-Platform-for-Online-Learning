import React from 'react'
import CourseCard from '../components/CourseCard'

export default function AllCourse() {
  return (
    
    <div className='sm:px-36 py-10 px-10'>
        
        <nav className='hidden sm:flex justify-between items-center py-4 px-6 bg-sky-600 text-white gap-5'>
            <a href="#TechnicalCourses" className="hover:text-gray-700 text-lg font-semibold">Technical Courses</a>
            <a href="#BusinessCourses" className="hover:text-gray-700 text-lg font-semibold">Business Courses</a>
            <a href="#CreativeArts" className="hover:text-gray-700 text-lg font-semibold">Creative Arts</a>
            <a href="#PersonalDevelopment" className="hover:text-gray-700 text-lg font-semibold">Personal Development</a>
            <a href="#AcademicSubjects" className="hover:text-gray-700 text-lg font-semibold">Academic Subjects</a>
            <a href="#SpecializedSkills" className="hover:text-gray-700 text-lg font-semibold">Specialized Skills</a>
        </nav>

        <h1 className='text-2xl sm:text-4xl font-serif mt-8 text-sky-600'>Let's Start Learning , Avishka</h1>

        <section id="TechnicalCourses">
            <div className='rounded-lg mt-8'>
                <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Technical Courses</h1>
                <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
            </div>
            <CourseCard/>
        </section>

        <section id="BusinessCourses">
            <div className='rounded-lg mt-12'>
                <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Business Courses</h1>
                <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
            </div>
            <CourseCard/>
        </section>

        <section id="CreativeArts">
            <div className='rounded-lg mt-12'>
                <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Creative Arts</h1>
                <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
            </div>
            <CourseCard/>
        </section>

        <section id="PersonalDevelopment">
            <div className='rounded-lg mt-12'>
                <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Personal Development</h1>
                <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
            </div>
            <CourseCard/>
        </section>

        <section id="AcademicSubjects">
            <div className='rounded-lg mt-12'>
                <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Academic Subjects</h1>
                <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
            </div>
            <CourseCard/>
        </section>

        <section id="SpecializedSkills">
            <div className='rounded-lg mt-12'>
                <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Specialized Skills</h1>
                <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
            </div>
            <CourseCard/>
        </section>

    </div>
  )
}
