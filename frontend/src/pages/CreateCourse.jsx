import { Alert, Button, Label, TextInput } from 'flowbite-react';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

export default function CreateCourse() {

  // State Variables To 
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  // Hook For Navigation
  const navigate = useNavigate();

  // Function To Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/course/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/dashboard?tab=courses`);
      }
    } catch (error) {
      setPublishError('Something Went Wrong');
    }
  };


  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen mt-10'>
      <div>
          <h1 className="text-3xl text-red-600 text-center font-serif uppercase "> - Create Course - </h1>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
      </div>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {/* Input Fields For Course */}
          <div className='mt-2'>
            <Label value='Course Name'  />
            <TextInput
              type='text'
              placeholder='Course Name'
              required
              id='courseName'
              className='flex-1 mt-2'
              onChange={(e) =>
                setFormData({ ...formData, courseName: e.target.value })
              }
            />
          </div>
          <div className='mt-2'>
            <Label value='Course Code'  />
            <TextInput
              type='text'
              placeholder='Course Code'
              required
              id='courseCode'
              className='flex-1 mt-2'
              onChange={(e) =>
                setFormData({ ...formData, courseCode: e.target.value })
              }
            />
          </div>
          <div className='mt-2'>
            <Label value='Course Description'  />
            <TextInput
              type='text'
              placeholder='Course Description'
              required
              id='courseDescription'
              className='flex-1 mt-2'
              onChange={(e) =>
                setFormData({ ...formData, courseDescription: e.target.value })
              }
            />
          </div>
       
        {/* Button To Add Course */}
        <Button type='submit' gradientDuoTone='purpleToBlue'  className=' mt-2'>
          Create Course
        </Button>
        {/* Displaying Publish Error */}
        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}