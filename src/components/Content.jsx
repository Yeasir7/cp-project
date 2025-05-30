import React from "react";
import { useLoaderData } from "react-router-dom";
import errorImage from "../assets/404.jpg";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, tags } = blog;
  return (
    <div className="mx-auto group hover:no-underline focus:no-underline   border-2 border-gray-300 rounded-xl p-2  ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44"
        src={cover_image || errorImage}
      />
      {/* tags */}
      <div>
        <div className="flex flex-wrap py-6   gap-2 border-t border-dashed ">
          {tags.map((tag) => (
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline "
            >
              #{tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
