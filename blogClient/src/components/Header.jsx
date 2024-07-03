import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Logo from "../assets/MusCo5.png";

export default function Header() {
  return (
    <Navbar className="bg-gray-100 border-b-2">
      {/* Logo Section */}
      <Link
        to="/"
        
      >
        <img src={Logo} alt="logo" className="w-12 h-12 mr-2 md:w-20 md:h-20" />
        <span className="p-1 px-3 text-sm font-semibold text-blue-300 rounded-lg bg-gradient-to-r from-blue-900 via-purple-900 to-green-900 sm:text-xl">
          MusCo
        </span>
        <span className="ml-1">Blog</span>
      </Link>

      {/* Search and Buttons Section */}
      <div className="flex items-center gap-4 md:order-2">
        <form action="" className="hidden lg:inline">
          <TextInput
            type="text"
            placeholder="Search"
            rightIcon={AiOutlineSearch}
            className="w-full"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" rounded>
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
        <Navbar.Toggle />
      </div>

      {/* Navbar Collapse Section for Medium and Larger Screens */}
      <Navbar.Collapse className="hidden md:flex">
        <Navbar.Link>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/myblogs">My Blogs</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/profile">Profile</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="/logout">Logout</Link>
        </Navbar.Link>
        <Button gradientDuoTone="purpleToPink">Sign Up</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
