import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentCourseCard from '../components/PaymentCourseCard';
import { useSelector } from 'react-redux';

export default function MyCourse() {
  const { currentUser } = useSelector((state) => state.user);
  const [payments, setPayments] = useState([]);
  const [courseIds, setCourseIds] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add state to track loading status

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
      setIsLoading(false); // Set loading to false regardless of the outcome
    };

    if (currentUser._id) {
      fetchPayments();
    }
  }, [currentUser._id]);

  useEffect(() => {
    if (courseIds.length > 0) {
      const fetchCourses = async () => {
        try {
          const courseFetchPromises = courseIds.map(courseId =>
            axios.get(`/courseservice/api/post/getposts?postId=${courseId}`)
          );
          const coursesResponses = await Promise.all(courseFetchPromises);
          const fetchedCourses = coursesResponses.map(response => response.data.posts[0]);
          setCourses(fetchedCourses);
        } catch (error) {
          console.error("Failed to fetch courses:", error);
        }
      };

      fetchCourses();
    }
  }, [courseIds]);

  return (
    <div className='sm:px-36 py-10 px-10'>
      <h1 className='text-2xl sm:text-4xl font-serif mt-8 text-sky-600'>My Courses</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {isLoading ? (
          <p>Loading courses...</p> // Display while loading
        ) : courses.length > 0 ? (
          courses.map(course => (
            <PaymentCourseCard key={course._id} course={course}/>
          ))
        ) : (
          <p className='text-2xl font-semibold text-orange-300'>You did not buy any courses.</p> // Display if no courses are found
        )}
      </div>
    </div>
  );
}
