import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 opacity-90 py-16 px-4"
      style={{ marginTop: "64px" }} // Adjust this to match the height of your fixed navbar
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
        {/* Information Section */}
        <div className="bg-gray-800 flex flex-col justify-center p-6 text-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Information</h1>
          <div className="flex flex-col py-2">
            <h2 className="font-medium">Address:</h2>
            <p>123 School St, Education City</p>
          </div>
          <div className="flex flex-col py-2">
            <h2 className="font-medium">Email:</h2>
            <p>info@school.com</p>
          </div>
          <div className="flex flex-col py-2">
            <h2 className="font-medium">Phone Number:</h2>
            <p>(123) 456-7890</p>
          </div>
          <div className="flex flex-col py-2">
            <h2 className="font-medium">Social Media:</h2>
            <p>Facebook | Twitter | Instagram</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white dark:bg-gray-800 flex flex-col justify-center p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
          <form action="">
            <div className="flex flex-col py-2">
              <label
                className="text-sm font-medium text-gray-800 dark:text-gray-300"
                htmlFor="id"
              >
                ID Number:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
                type="text"
                id="id"
                placeholder="Enter Student ID"
              />
            </div>
            <div className="flex flex-col py-2">
              <label
                className="text-sm font-medium text-gray-800 dark:text-gray-300"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="flex flex-col py-2">
              <label
                className="text-sm font-medium text-gray-800 dark:text-gray-300"
                htmlFor="phone"
              >
                Phone:
              </label>
              <input
                className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="flex flex-col py-2">
              <label
                className="text-sm font-medium text-gray-800 dark:text-gray-300"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-700 dark:text-white"
                name="message"
                id="message"
                placeholder="Enter Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex flex-col py-2">
              <button className="bg-purple-600 w-full rounded-xl font-medium py-2 text-white transition duration-300 hover:bg-purple-700">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
