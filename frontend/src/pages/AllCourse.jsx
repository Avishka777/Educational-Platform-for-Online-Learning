import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function AllCourse() {
  const { currentUser } = useSelector((state) => state.user);

  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  useEffect(() => {
    // Modify the URL based on whether 'All Courses' is selected
    const categoryQuery = selectedCategory === "All Courses" ? '' : `?category=${selectedCategory}`;
    const fetchCourses = async () => {
      const response = await axios.get(`/courseservice/api/post/getposts${categoryQuery}`);
      setCourses(response.data.posts);
    };

    fetchCourses();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='sm:px-36 py-10 px-10'>
      <nav className='hidden sm:flex justify-between items-center py-4 px-6 bg-sky-600 text-white gap-5'>
        <button onClick={() => handleCategoryChange("All Courses")} className="hover:text-gray-700 text-lg font-semibold">All Courses</button>
        <button onClick={() => handleCategoryChange("Technical Courses")} className="hover:text-gray-700 text-lg font-semibold">Technical Courses</button>
        <button onClick={() => handleCategoryChange("Business Courses")} className="hover:text-gray-700 text-lg font-semibold">Business Courses</button>
        <button onClick={() => handleCategoryChange("Creative Arts")} className="hover:text-gray-700 text-lg font-semibold">Creative Arts</button>
        <button onClick={() => handleCategoryChange("Personal Development")} className="hover:text-gray-700 text-lg font-semibold">Personal Development</button>
        <button onClick={() => handleCategoryChange("Academic Subjects")} className="hover:text-gray-700 text-lg font-semibold">Academic Subjects</button>
        <button onClick={() => handleCategoryChange("Specialized Skills")} className="hover:text-gray-700 text-lg font-semibold">Specialized Skills</button>
      </nav>

      <h1 className='text-2xl sm:text-4xl font-serif mt-8 text-sky-600'>Let's Start Learning, {currentUser.userName}</h1>

      <section id={selectedCategory.replace(/\s+/g, '')}>
        <div className='rounded-lg mt-8'>
          <h1 className='text-2xl sm:text-4xl font-serif mb-5'>{selectedCategory}</h1>
          <hr className='my-1 sm:my-2 border-2 border-gray-500 font-bold' />
        </div>
        {courses.length > 0 ? courses.map((course) => (
          <CourseCard key={course._id} course={course}/>
        )) : <p>No courses found in this category.</p>}
      </section>
    </div>
  );
}
