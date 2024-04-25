import React from 'react'
import HomeSlides from '../components/HomeBanners'
import CourseCard from '../components/CourseCard'

export default function Home() {
  return (
    <div className='sm:px-36 py-10 px-10'>
      <HomeSlides/>
      <div className='rounded-lg mt-10'>
          <h1 className='text-2xl sm:text-4xl font-serif text-center mb-5'>Recent Courses</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
      </div>
      <CourseCard/>
    </div>
  )
}
