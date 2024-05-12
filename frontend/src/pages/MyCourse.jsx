import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentCourseCard from '../components/PaymentCourseCard';
import { useSelector } from 'react-redux';

export default function MyCourse() {
  const { currentUser } = useSelector((state) => state.user);
  const [payments, setPayments] = useState([]);
  const [courseIds, setCourseIds] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(`/paymentservice/api/stripe/${currentUser._id}`);
        setPayments(response.data);
        const extractedCourseIds = response.data.map(payment => payment.courseid);
        setCourseIds(extractedCourseIds);
      } catch (error) {
        console.error("Failed to fetch payments:", error);
      }
    };

    if (currentUser._id) {
      fetchPayments();
    }
  }, [currentUser._id]);

  useEffect(() => {
    if (courseIds.length > 0) {
      const fetchCourses = async () => {
        try {
          // Create an array of promises for each course ID fetch
          const courseFetchPromises = courseIds.map(courseId =>
            axios.get(`/courseservice/api/post/getposts?postId=${courseId}`)
          );
          // Resolve all promises to get course details
          const coursesResponses = await Promise.all(courseFetchPromises);
          const fetchedCourses = coursesResponses.map(response => response.data.posts[0]);
          setCourses(fetchedCourses);
        } catch (error) {
          console.error("Failed to fetch courses:", error);
        }
      };

      fetchCourses();
    }
  }, [courseIds]); // Dependency on courseIds ensures this runs when IDs update

  return (
    <div className='sm:px-36 py-10 px-10'>
      <h1 className='text-2xl sm:text-4xl font-serif mt-8 text-sky-600'>My Courses</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {courses.map(course => (
          <PaymentCourseCard key={course._id} course={course}/>
        ))}
      </div>
    </div>
  );
}
