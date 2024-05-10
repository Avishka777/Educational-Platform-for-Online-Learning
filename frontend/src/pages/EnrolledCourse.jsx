import React from 'react'
import SessionCard from '../components/SessionCard'

export default function EnrolledCourse() {
  return (
    <div className='mt-10'>
        <h1 className='text-center text-5xl'>Course Name </h1>
        <SessionCard/>
        <SessionCard/>
        <SessionCard/>
    </div>
  )
}
