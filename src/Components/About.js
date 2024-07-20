import React from 'react';
import MunnaImage from '../assets/about us image 1.jpeg';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 my-20">
            <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105">
                <div className="md:flex">
                    <div className="md:w-1/2 h-1/4">
                        <img className="object-cover w-full h-full" src={MunnaImage} alt="Munna Kumar" />
                    </div>
                    <div className="p-8 md:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-800">Welcome to Tech With Munna!</h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            I'm Munna Kumar, a passionate web developer with a love for creating innovative and user-friendly applications. My journey into the world of programming started during my college days, where I discovered my fascination with crafting digital experiences that are both functional and visually appealing.
                        </p>
                        <div className="mt-8">
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300">
                                Connect with Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
