import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/_SignIn";
import SignUp from "./pages/_SignUp";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import NewBlog from "./pages/NewBlog";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}
