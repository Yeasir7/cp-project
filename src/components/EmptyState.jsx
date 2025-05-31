import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({message, address, label}) => {
    return (
      <div className="flex flex-col gap-3 justify-center items-center min-h-[calc(100vh-116px)]">
        <p className="text-3xl">{message}</p>

        <Link
          to={address}
          class="relative inline-block px-4 py-2 font-medium group"
        >
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
          <span class="relative text-black group-hover:text-white">
            {label}
          </span>
        </Link>
      </div>
    );
};

export default EmptyState;