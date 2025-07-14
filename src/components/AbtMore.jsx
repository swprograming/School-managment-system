import React from 'react';
import about from '../assets/about.jpeg';

const AbtMore = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 opacity-90 w-full py-10 px-4 border-b-4 border-gray-300 dark:border-gray-700"
      style={{ marginTop: '64px' }} // Adjust this value to match your navbar height
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <img
          className="w-full max-w-[500px] mx-auto my-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          src={about}
          alt="About Us"
        />

        {/* Content Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold py-2">
            About Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo
            temporibus minima illo deleniti dolor fuga distinctio, dignissimos
            labore minus molestias expedita, odio commodi vitae ex ipsa
            suscipit. Error, distinctio?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbtMore;
