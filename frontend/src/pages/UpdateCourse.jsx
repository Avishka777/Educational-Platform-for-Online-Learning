import React, { useEffect, useState } from 'react';
import { Alert, Button, Select, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function UpdateCourse() {
  const { id } = useParams();
  console.log(id);
  const [formData, setFormData] = useState([]);
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/courseservice/api/post/getposts?postId=${id}`);
        setFormData(response.data.posts[0]);
      } catch (error) {
        console.error("Failed to fetch course details:", error);
        setPublishError("Failed to load course details.");
      }
    };

    fetchCourse();
  }, [id]);

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/courseservice/api/post/updatepost/${id}`, formData);
      navigate('/dashboard?tab=courses');
    } catch (error) {
      console.error("Update failed:", error);
      setPublishError("Something went wrong with the update.");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update Course</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Title"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextInput
          type="text"
          placeholder="Price"
          required
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <Select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="uncategorized">Select a category</option>
          <option value="Technical Courses">Technical Courses</option>
          <option value="Business Courses">Business Courses</option>
          <option value="Creative Arts">Creative Arts</option>
          <option value="Personal Development">Personal Development</option>
          <option value="Academic Subjects">Academic Subjects</option>
          <option value="Specialized Skills">Specialized Skills</option>
        </Select>
        <Button type="submit" gradientDuoTone="purpleToPink">Update Course</Button>
        {publishError && <Alert color="failure">{publishError}</Alert>}
      </form>
    </div>
  );
}
