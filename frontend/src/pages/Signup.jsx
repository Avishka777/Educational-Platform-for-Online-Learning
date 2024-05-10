import React from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import OAuth from '../components/OAuth';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userName || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all the fields.");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/authservice/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-10 px-10'>
      <div className='flex max-w-6xl mx-auto flex-col md:flex-row md:items-center gap-5'>

        {/* Left */}
        <div className='flex-1 flex flex-col items-center justify-center mx-8'>
          <img src={logo} className="h-48 sm:h-56" alt="Company Logo" />
          <p className='text-lg mt-2 text-center font-serif'>
            Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies
          </p>
        </div>

        {/* Right */}
        <div className='flex-1'>
        <div className='text-3xl mb-3 text-center font-serif text-sky-500'>
            Create to Your Account
          </div>
          <hr className='shadow-lg mb-2 '/>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Full Name' />
              <TextInput type='text' placeholder='Enter First Name' id='fullName' onChange={handleChange}/>
            </div>

            <div>
              <Label value='User Name' />
              <TextInput type='text' placeholder='Enter Last Name' id='userName' onChange={handleChange}/>
            </div>

            <div>
              <Label value='Email' />
              <TextInput type='email' placeholder='name@gmail.com' id='email' onChange={handleChange}/>
            </div>

            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>

            <Button gradientDuoTone='purpleToBlue' type='submit' >Sign Up</Button>

          </form>

          <OAuth/>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>

        </div>
      </div>
    </div>

  );

}