import React, { useEffect, useState } from "react";
import { SiCashapp } from "react-icons/si";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

export default function Course() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [stripeToken, setStripToken] = useState();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser._id);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(
        `/courseservice/api/post/getposts?postId=${id}`
      );
      setCourses(response.data.posts[0]);
    };

    fetchCourses();
  }, [id]);

  console.log(courses);

  //payment
  const onToken = (token) => {
    setStripToken(token);
  };

  useEffect(() => {
    const makePayment = async () => {
      try {
        if (!stripeToken) return;

        const response = await axios.post(
          `/paymentservice/api/stripe/${id}/${currentUser._id}/${courses.price}/${courses.title}`,
          {
            tokenId: stripeToken.id,
            amount: courses.price,
            email: stripeToken.email,
          }
        );

        console.log("Payment successful:", response.data);
        window.location.href = "/mycourses";
      } catch (error) {
        console.error("Payment error:", error);
      }
    };

    makePayment();
  }, [stripeToken, id, currentUser, courses.price, courses.title]);

  return (
    <div className="sm:px-36 py-10 px-10">
      <div className="rounded-lg mt-12">
        <h1 className="text-2xl sm:text-4xl font-serif mb-5 text-sky-600">
          {courses.title}
        </h1>
        <hr className="my-1 sm:my-2 border-2 border-gray-500 font-bold" />
      </div>

      <div className="flex max-w-full mx-auto flex-col md:flex-row gap-5">
        {/* Left */}
        <div className="flex flex-col w-2/3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10 p-5">
          <p class="mb-1 text-3xl  dark:text-sky-600 font-bold text-sky-600 font-serif">
            Course Description
          </p>
          <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
          <div
            className="mx-auto p-5 sm:px-5 product-content text-xl"
            dangerouslySetInnerHTML={{ __html: courses && courses.content }}
          ></div>
        </div>

        {/* Right */}
        <div className="flex-1 w-1/3">
          <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
            <img class="rounded-t-lg" src={courses.photo} alt="Course Image" />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {courses.title}
              </h5>
              <p class="mb-3 text-xl text-gray-700 dark:text-gray-400">
                Price: $ {courses.price}
              </p>

              <StripeCheckout
                name="Knowlage.net"
                billingAddress
                description="Payment for Course"
                amount={parseFloat(courses.price) * 100}
                token={onToken}
                stripeKey={
                  "pk_test_51PAu2GAHeHiratLE7Ms4HuD72on5IDaxCrWf6wyagVxQLftAf1vptM16FE49I9WzjZ3HlsWgJZVRX5aCpnr4SxjR00jctG9rNQ"
                }
              >
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buy Now
                  <SiCashapp className="ml-3" size={20} />
                </a>
              </StripeCheckout>
              <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <FaStar color="#D31BAA" />
                <FaStar color="#D31BAA" />
                <FaStar color="#D31BAA" />
                <FaStar color="#D31BAA" />
                <FaStar color="#D31BAA" />
                <span class="text-gray-400 text-lg">(134K reviews)</span>
              </div>
              <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
              <p class="mb-1 text-2xl text-black dark:text-white font-bold">
                Beginner level
              </p>
              <p class="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
                Recommended experience
              </p>
              <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
              <p class="mb-1 text-2xl text-black dark:text-white font-bold">
                Flexible schedule
              </p>
              <p class="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
                Learn at your own pace
              </p>
              <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
              <p class="mb-1 text-2xl text-black dark:text-white font-bold">
                Earn degree credit
              </p>
              <p class="mb-3 text-xl text-gray-700 dark:text-gray-300 ">
                Learn more
              </p>
              <hr className="my-3 sm:my-3 border-1 border-gray-500 font-bold" />
              <p class="mb-1 text-2xl text-black dark:text-white font-bold">
                6 months at 10 hours a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
