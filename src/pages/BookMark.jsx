import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { getBlogs } from "../utilitys";

const BookMark = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlog = getBlogs();
    setBlogs(storedBlog);
  }, []);
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Blog deleteButton={true} key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default BookMark;
