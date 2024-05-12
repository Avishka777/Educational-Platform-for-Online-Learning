import React, { useEffect, useState } from 'react'
import CourseCard from '../components/CourseCard'
import axios from 'axios';
import PaymentCourseCard from '../components/PaymentCourseCard';

export default function MyCourse() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("All Courses"); 

  useEffect(() => {

    const fetchCourses = async () => {
        const respose = await axios.get(`/courseservice/api/post/getposts`)
        setCourses(respose.data.posts)
    }

    fetchCourses()
      
  },[])

  return (
    <div className='sm:px-36 py-10 px-10'>
        
        <h1 className='text-2xl sm:text-4xl font-serif mt-8 text-sky-600'>My Courses</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        
        {
           courses.map((course) => ( 
            <PaymentCourseCard key={course._id} course={course}/>  
          ))
        }        
    </div>
    </div>
  )
}
