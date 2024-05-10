import React from 'react'
import HomeSlides from '../components/HomeBanners'
import CourseCard from '../components/CourseCard'
import Sponsors from '../components/Sponsors'
import TopProvider from '../components/TopProvider'
import StudentFeedback from '../components/StudentFeedback'

export default function Home() {
  return (
    <div className='sm:px-36 py-10 px-10'>
      <HomeSlides/>
      
      {/* <div className='rounded-lg mt-12'>
          <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Recent Courses</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
      </div> */}
      {/* <CourseCard/> */}
      
      <div className='rounded-lg mt-12'>
          <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Our Sponsors</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
      </div>
      <Sponsors/>

      <div className='rounded-lg mt-12'>
          <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Top Course Providers</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
      </div>
      <TopProvider/>

      <div className='rounded-lg mt-12'>
          <h1 className='text-2xl sm:text-4xl font-serif mb-5'>Students Feedbacks</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
      </div>
      <StudentFeedback/>

    </div>
  )
}
