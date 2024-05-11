import React, { useEffect, useState } from 'react';
import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Ensure CSS for ReactQuill is imported

export default function UpdateCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    content: '',
  });
  const [publishError, setPublishError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/courseservice/api/post/getposts?postId=${id}`);
        if (response.data.posts && response.data.posts[0]) {
          setFormData(response.data.posts[0]);
        } else {
          throw new Error('No data found');
        }
      } catch (error) {
        console.error("Failed to fetch course details:", error);
        setPublishError("Failed to load course details.");
      }
    };

    fetchCourse();
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/courseservice/api/post/updatepost/${id}`, formData);
      navigate('/dashboard?tab=courses'); // Adjust according to your actual route
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
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="Price"
          required
          value={formData.price}
          onChange={(e) => handleInputChange('price', e.target.value)}
        />
        <Select
          value={formData.category}
          onChange={(e) => handleInputChange('category', e.target.value)}
        >
          <option value="uncategorized">Select a category</option>
          <option value="Technical Courses">Technical Courses</option>
          <option value="Business Courses">Business Courses</option>
          <option value="Creative Arts">Creative Arts</option>
          <option value="Personal Development">Personal Development</option>
          <option value="Academic Subjects">Academic Subjects</option>
          <option value="Specialized Skills">Specialized Skills</option>
        </Select>
        {/* Single Image Upload */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            // onChange={(e) => setPhoto(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            // onClick={() => handleUpload(photo, 'photo')}
            // disabled={uploadProgress.photo}
          >
            {/* {uploadProgress.photo ? (
              <CircularProgressbar
                value={parseInt(uploadProgress.photo, 10)}
                text={`${uploadProgress.photo}%`}
                styles={buildStyles({ pathColor: `rgba(62, 152, 199, ${uploadProgress.photo / 100})` })}
              />
            ) : (
              "Upload Photo"
            )} */}
            Upload Photo
          </Button>
        </div>
        {/* {uploadError.photo && <Alert color="failure">{uploadError.photo}</Alert>}
        {formData.photo && (
          <img src={formData.photo} alt="Uploaded" className="w-full h-72 object-cover" />
        )} */}

        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="video/*"
            multiple
            // onChange={(e) => setVideoFiles([...videoFiles, ...Array.from(e.target.files)])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            // onClick={() => handleMultipleUploads(videoFiles, 'videos')}
          >
            Upload Videos
          </Button>
        </div>
        {/* {Object.keys(uploadError).filter(key => key.startsWith('videos')).map(key => (
          <Alert key={key} color="failure">{uploadError[key]}</Alert>
        ))}
        {formData.videos.map((video, index) => (
          <video key={index} controls src={video} className="w-full h-72 object-cover"></video>
        ))} */}

        {/* Multiple PDFs Upload */}
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="application/pdf"
            multiple
            // onChange={(e) => setPdfFiles([...pdfFiles, ...Array.from(e.target.files)])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            // onClick={() => handleMultipleUploads(pdfFiles, 'pdfs')}
          >
            Upload PDFs
          </Button>
        </div>
        {/* {Object.keys(uploadError).filter(key => key.startsWith('pdfs')).map(key => (
          <Alert key={key} color="failure">{uploadError[key]}</Alert>
        ))}
        {formData.pdfs.map((pdf, index) => (
          <div key={index} className="text-center mt-4">
            <a href={pdf} target="_blank" rel="noopener noreferrer">View PDF {index + 1}</a>
          </div>
        ))} */}

        <ReactQuill
          theme="snow"
          placeholder="Write Content..."
          className="h-72 mb-12"
          value={formData.content}
          onChange={(content) => handleInputChange('content', content)}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">Update Course</Button>
        {publishError && <Alert color="failure">{publishError}</Alert>}
      </form>
    </div>
  );
}
