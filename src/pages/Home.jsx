import React from 'react';
import Hero from '../components/Hero';
import wave from '../assets/wave.svg'


const Home = () => {
    return (
        <div className='min-h-[calc(100vh-116px)] flex flex-col justify-center items-center relative'>
            <Hero></Hero>
            <img className='w-full absolute bottom-0' src={wave} alt="" />
        </div>
    );
};

export default Home;