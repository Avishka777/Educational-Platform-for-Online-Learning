import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo.png";

export default function Footers() {
  return (
    <Footer container className="h-50 sm:h-50">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="ml-10">
            <img
              src={logo}
              className="h-24 sm:h-24 ml-5 mb-2"
              alt="Company Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-teal-500">
              Knowledge.Net
            </span>
            <div className="flex gap-5 mt-4">
              <Footer.Icon href="#" icon={BsFacebook} target="_blank" />
              <Footer.Icon href="#" icon={BsInstagram} target="_blank" />
              <Footer.Icon href="#" icon={BsTwitter} target="_blank" />
              <Footer.Icon href="#" icon={BsDribbble} target="_blank" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-0 sm:mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div className="hidden lg:inline">
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Avishka</Footer.Link>
                <Footer.Link href="#">Dhananjaya</Footer.Link>
                <Footer.Link href="#">Pasan</Footer.Link>
                <Footer.Link href="#">Dimesha</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="hidden lg:inline">
              <Footer.Title title="More" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Blog</Footer.Link>
                <Footer.Link href="#">Help</Footer.Link>
                <Footer.Link href="#">Investors</Footer.Link>
                <Footer.Link href="#">Statements</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="hidden lg:inline">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Cookie Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="2024 Knowledge.Net . All Rights Reserved.™"
          />
          <p className="text-teal-600 text-sm">
            Designed & Developed By SLIIT Undergraduates
          </p>
        </div>
      </div>
    </Footer>
  );
}
