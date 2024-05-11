import React from 'react'
import SessionCard from '../components/SessionCard'
import { FooterDivider, Label, Progress } from "flowbite-react";

export default function EnrolledCourse() {
  return (
    <div className='mt-10'>
        <h1 className='text-center text-5xl text-sky-600'>Course Name </h1>
        <FooterDivider></FooterDivider>
        <div className='mx-20 px-12'>
          <Label className='text-xl text-sky-600 '>Course Progress</Label>
        <Progress progress={50} textLabel="Progress" color="cyan" className='mx-auto w-full mt-2' size="xl" labelProgress labelText />
        </div>
        <SessionCard/>
    </div>
  )
}
