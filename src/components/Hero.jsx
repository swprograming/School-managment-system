import React from "react";
import skl from "../assets/sklg.jpeg";

const Hero = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 opacity-90 w-full h-screen flex items-center ">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 p-6">
                <div className="flex flex-col justify-center p-8">
                    <h1 className="text-5xl font-bold mb-4">Sunny Side</h1>
                    <p className="text-lg leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti similique a saepe voluptatibus, quasi doloremque voluptate cum incidunt repellat sequi, ipsam praesentium non dolore in nesciunt nihil ex labore.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img className="w-full h-full max-w-[500px] rounded-lg shadow-lg object-cover" src={skl} alt="School" />
                </div>  
            </div>
        </div>
    );
}

export default Hero;