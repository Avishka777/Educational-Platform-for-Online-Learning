import React from "react";
import Avishka from "../assets/users/avishka.jpg";
import Pasan from "../assets/users/pasan.jpg";
import Dhana from "../assets/users/dhana.jpg";
import Dimi from "../assets/users/dimi.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function TopProvider() {
  return (
    <div className="min-w-full sm:flex gap-5 mt-5 ">
      <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div class="flex flex-col items-center py-10 mx-4">
          <img
            class="w-32 h-32 mb-3 rounded-full"
            src={Avishka}
            alt="Avishka image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Avishka Rathnakumara
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </span>
          <div class="flex mt-4 md:mt-6 gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=100085722827700&ref=xav_ig_profile_web"
              target="_blank"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://www.instagram.com/avishka__rathnakumara__/"
              target="_blank"
            >
              <FaInstagramSquare size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/avishka-rathna/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/Avishka777" target="_blank">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>
      </div>

      <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div class="flex flex-col items-center py-10 mx-4">
          <img
            class="w-32 h-32 mb-3 rounded-full"
            src={Dhana}
            alt="Dhana image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Dhananjaya Lakshan
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </span>
          <div class="flex mt-4 md:mt-6 gap-2">
            <a href="#" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#" target="_blank">
              <FaInstagramSquare size={30} />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin size={30} />
            </a>
            <a href="#" target="_blank">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>
      </div>

      <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div class="flex flex-col items-center py-10 mx-4">
          <img
            class="w-32 h-32 mb-3 rounded-full"
            src={Pasan}
            alt="PAsan image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Pasan Frenando
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </span>
          <div class="flex mt-4 md:mt-6 gap-2">
            <a href="#" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#" target="_blank">
              <FaInstagramSquare size={30} />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin size={30} />
            </a>
            <a href="#" target="_blank">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>
      </div>

      <div class="sm:w-1/4 max-w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div class="flex flex-col items-center py-10 mx-4">
          <img
            class="w-32 h-32 mb-3 rounded-full"
            src={Dimi}
            alt="Dimi image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Dimesha Wijerathna
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            Full Stack Developer
          </span>
          <div class="flex mt-4 md:mt-6 gap-2">
            <a href="#" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#" target="_blank">
              <FaInstagramSquare size={30} />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin size={30} />
            </a>
            <a href="#" target="_blank">
              <FaGithubSquare size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
