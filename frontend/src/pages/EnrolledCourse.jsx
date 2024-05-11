import React, { useEffect, useState } from 'react';
import SessionCard from '../components/SessionCard';
import { FooterDivider, Label, Progress } from "flowbite-react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EnrolledCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/courseservice/api/post/getposts?postId=${id}`);
        setCourse(response.data.posts[0]); // Assuming 'posts' array has the course data
      } catch (error) {
        console.error("Failed to fetch course details:", error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <div>Loading...</div>; // Render a loading or placeholder component if course data isn't fetched yet
  }

  return (
    <div className='mt-10'>
      <h1 className='text-center text-5xl text-sky-600'>{course.title}</h1>
      <FooterDivider />
      <div className='mx-20 px-12'>
        <Label className='text-xl text-sky-600'>Course Progress</Label>
        <Progress progress={50} textLabel="Progress" color="cyan" className='mx-auto w-full mt-2' size="xl" labelProgress labelText />
      </div>
      <SessionCard videos={course.videos} pdfs={course.pdfs} />
    </div>
  );
}
