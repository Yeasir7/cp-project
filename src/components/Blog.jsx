import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const Blog = ({ blog, deleteButton }) => {
  const { cover_image, title, description, published_timestamp, id } = blog;
  return (
    <div className="relative max-w-sm mx-auto ">
      <Link
        to={`/blog/${id}`}
        className="block group hover:no-underline focus:no-underline  transition border-2 border-gray-300 rounded-xl p-2 hover:scale-105 hover:border-gray-400"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44"
          src={cover_image || errorImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs">{published_timestamp}</span>
          <p>{description}</p>
        </div>
      </Link>
      {deleteButton && (
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-red-50">
          <MdDeleteForever size={30} className="text-red-500" />
        </div>
      )}
    </div>
  );
};

export default Blog;
