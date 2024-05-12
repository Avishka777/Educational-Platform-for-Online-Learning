import React, { useEffect, useState } from 'react';
import SessionCard from '../components/SessionCard';
import { FooterDivider, Label, Progress } from "flowbite-react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EnrolledCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [completion, setCompletion] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/courseservice/api/post/getposts?postId=${id}`);
        const courseData = response.data.posts[0];
        setCourse(courseData);
        setCompletion(new Array(courseData.videos.length).fill(false));
      } catch (error) {
        console.error("Failed to fetch course details:", error);
      }
    };

    fetchCourse();
  }, [id]);

  const handleCompletionToggle = (index) => {
    const newCompletion = [...completion];
    newCompletion[index] = !newCompletion[index];
    setCompletion(newCompletion);
  };

  const calculateProgress = () => {
    const total = completion.length;
    const completed = completion.filter(Boolean).length;
    return Math.round((completed / total) * 100); // Round to nearest whole number
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-10'>
      <h1 className='text-center text-5xl text-sky-600'>{course.title}</h1>
      <FooterDivider />
      <div className='mx-20 px-12'>
        <Label className='text-xl text-sky-600'>Course Progress</Label>
        <Progress progress={calculateProgress()} color="cyan" className='mx-auto w-full mt-2' size="xl" labelProgress labelText />
      </div>
      <SessionCard videos={course.videos} pdfs={course.pdfs} completion={completion} onToggleCompletion={handleCompletionToggle} />
    </div>
  );
}
