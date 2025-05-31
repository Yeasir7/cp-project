import React from "react";
import { useLoaderData } from "react-router-dom";
import errorImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, tags, body_html } = blog;
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

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>

        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
