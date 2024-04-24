import React from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Signup() {
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
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Full Name' />
              <TextInput type='text' placeholder='Enter First Name' id='fullName'/>
            </div>

            <div>
              <Label value='User Name' />
              <TextInput type='text' placeholder='Enter Last Name' id='userName'/>
            </div>

            <div>
              <Label value='Email' />
              <TextInput type='email' placeholder='name@gmail.com' id='email'/>
            </div>

            <div>
              <Label value='Your password' />
              <TextInput type='password' placeholder='Password' id='password'/>
            </div>

            <Button gradientDuoTone='purpleToBlue' type='submit' >Sign Up</Button>

          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
          </div>

        </div>
      </div>
    </div>

  );

}