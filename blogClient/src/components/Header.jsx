import React from "react";
import { Button, Navbar, Dropdown, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Logo from "../assets/MusCo5.png";

export default function Header() {
  // const { pathname: path } = useLocation();
  const pathway = useLocation().pathname;
  return (
    <Navbar className="bg-gray-100 border-b-2">
      {/* Logo Section */}
      <Link to="/">
        <img src={Logo} alt="logo" className="w-12 h-12 mr-2 md:w-20 md:h-20" />
      </Link>

      {/* Search and Buttons Section */}
        <form action="" className="hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Search"
            rightIcon={AiOutlineSearch}
            className="w-full"
          />
        </form>
      <div className="flex items-center gap-4 md:order-2">
        <Button className="w-12 h-10 lg:hidden" color="gray">
          <AiOutlineSearch />
        </Button>
        <Button className="hidden w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button outline gradientDuoTone="purpleToPink">
            Sign In
          </Button>
        </Link>
      </div>
      {/* Navbar Collapse Section for Medium and Larger Screens */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={pathway === "/"} as={"div"}>
          <Link to="/myblogs">My Blogs</Link>
        </Navbar.Link>
        <Navbar.Link active={pathway === "/"} as={"div"}>
          <Link to="/profile">Profile</Link>
        </Navbar.Link>
        <Navbar.Link active={pathway === "/"} as={"div"}>
          <Link to="/logout">Logout</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
