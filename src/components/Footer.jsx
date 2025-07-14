import React from 'react';

const Footer = () => {
    return (
        <div className='w-full py-10 px-4 bg-gray-800 text-white'>
            <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Stay Informed</h1>
                    <p>Subscribe to our newsletter for updates on school events, announcements, and more!</p>
                    <form className='flex flex-col md:flex-row mt-4'>
                        <input
                            type="email"
                            placeholder="Your email"
                            className='flex-grow p-2 rounded-lg mr-0 md:mr-2 mb-2 md:mb-0'
                            required
                        />
                        <button className='bg-purple-600 text-white rounded-2xl py-2 px-4 hover:bg-purple-700 transition duration-300'>
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Quick Links</h1>
                    <ul className='space-y-2'>
                        <li><a href="/" className='hover:underline'>Home</a></li>
                        <li><a href="/aboutus" className='hover:underline'>About Us</a></li>
                        <li><a href="/students" className='hover:underline'>Student Portal</a></li>
                        <li><a href="/parents" className='hover:underline'>Parent Portal</a></li>
                        <li><a href="/contact" className='hover:underline'>Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className='text-center mt-8'>
                <p>&copy; {new Date().getFullYear()} Sunny Side School Management System. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;