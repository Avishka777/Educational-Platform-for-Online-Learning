import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function Signin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all the fields."));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/authservice/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-10 px-10">
      <div className="flex max-w-6xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1 flex flex-col items-center justify-center mx-8">
          <img src={logo} className="h-48 sm:h-64 m-10" alt="Company Logo" />
          <p className="text-3xl mt-2 text-center font-serif">
            Start, switch, or advance your career with more than 6,900 courses,
            Professional Certificates, and degrees from world-class universities
            and companies
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1 m-10">
          <div className="text-4xl mb-3 text-center font-serif text-sky-500">
            Login to Your Account
          </div>
          <hr className="shadow-lg mb-2 " />
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@gmail.com"
                id="email"
                className="mt-2"
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                className="mt-2"
                onChange={handleChange}
              />
            </div>

            <Button gradientDuoTone="purpleToBlue" type="submit">
              Sign In
            </Button>
          </form>

          <OAuth />

          <div className="flex gap-2 text-sm mt-5">
            <span>Don't Have an account?</span>
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
