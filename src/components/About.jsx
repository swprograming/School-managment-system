import React from 'react';
import about from '../assets/about.jpeg';

const About = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 w-full py-10 px-4 border-b-[5px] '>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8'>
        <img className='w-[500px] mx-auto my-4 rounded-lg shadow-lg' src={about} alt="school" />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-3 text-center'>About Us</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quo temporibus minima illo deleniti dolor fuga distinctio, dignissimos labore minus molestias expedita, odio commodi vitae ex ipsa suscipit. Error, distinctio?</p>
          <a href="/aboutus" className={`bg-purple-600 inline-flex items-center justify-center rounded-xl px-4 py-3 mt-4 transition duration-300 ${location.pathname === '/aboutus' ? 'bg-purple-600 text-white' : ' font-medium text-xl'}`}>More About us</a>
        </div>
      </div>
    </div>
  );
}

export default About;