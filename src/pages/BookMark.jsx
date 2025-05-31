import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { deleteBlog, getBlogs } from "../utilitys";
import EmptyState from "../components/EmptyState";

const BookMark = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlog = getBlogs();
    setBlogs(storedBlog);
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlog = getBlogs();
    setBlogs(storedBlog);
  };

  if (blogs.length < 1) return (
    <EmptyState
      message="No Bookmarks Found"
      address={"/blog"}
      label={"browse blog"}
    ></EmptyState>
  );

  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 ml-5">
      {blogs.map((blog) => (
        <Blog
          handleDelete={handleDelete}
          deleteButton={true}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};

export default BookMark;
