import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../assets/404.jpg'

const Blog = ({blog}) => {
	const {cover_image, title, description,published_timestamp, id} = blog
    return (
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline  transition border-2 border-gray-300 rounded-xl p-2 hover:scale-105 hover:border-gray-400">
				<img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || errorImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs">{published_timestamp}</span>
					<p>{description}</p>
				</div>
			</Link>
    );
};

export default Blog;