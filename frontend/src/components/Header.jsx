import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import logo from "../assets/logo.png";
import { signoutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import { MdNotifications } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import axios from "axios";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/authservice/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await axios.get(`/notificationservice/api/notification/`);
      setNotifications(res.data);
    };

    fetchNotifications();
  }, []);

  console.log(notifications);

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex"
      >
        <img src={logo} className="mr-3 h-16 sm:h-16" alt="Company Logo" />
        <span className="self-center whitespace-nowrap text-3xl dark:text-teal-600 text-teal-700">
          Knowledge.Net
        </span>
      </Link>

      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button
          className="border-none"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </Button>

        <Dropdown
          arrowIcon={false}
          inline
          label={<MdNotifications size={28} className="my-auto mr-4" />}
          className="w-1/4 bg-slate-200"
        >
          <Dropdown.Header>
            <div className="flex justify-between">
              <span className="block text-lg font-bold text-sky-600">
                Read All
              </span>
              <IoMdDoneAll size={16} color="#1f96c1" className="my-auto mx-4" />
            </div>
          </Dropdown.Header>

          {notifications.map((notification, index) => (
            <>
              <Dropdown.Item className="font-bold text-left">
                {notification.title}
              </Dropdown.Item>
              <Dropdown.Item className="text-left text-xs">
                {notification.annousement}
              </Dropdown.Item>
              <Dropdown.Divider />
            </>
          ))}
        </Dropdown>

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.userName}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              className="w-20 h-10 sm:inline rounded-lg"
            >
              <p className="text-xs">Sign In</p>
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          active={path === "/"}
          as={"div"}
          style={{ color: path === "/" ? "#1f96c1" : "#6F6F6F" }}
        >
          <Link to="/" className="text-lg">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/allcourses"}
          as={"div"}
          style={{ color: path === "/allcourses" ? "#1f96c1" : "#6F6F6F" }}
        >
          <Link to="/allcourses" className="text-lg">
            All Courses
          </Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/mycourses"}
          as={"div"}
          style={{ color: path === "/mycourses" ? "#1f96c1" : "#6F6F6F" }}
        >
          <Link to="/mycourses" className="text-lg">
            My Courses
          </Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/about"}
          as={"div"}
          style={{ color: path === "/about" ? "#1f96c1" : "#6F6F6F" }}
        >
          <Link to="/about" className="text-lg">
            About Us
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
