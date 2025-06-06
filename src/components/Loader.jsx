import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
        <ScaleLoader color="#FFC0CB"></ScaleLoader>
      </div>
    );
};

export default Loader;