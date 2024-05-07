import React from 'react';
import about from '../assets/about.jpg';
import collegeImage from '../assets/college.jpg';
import vision from '../assets/Vision.jpg';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-10" style={{ fontFamily: '"Roboto", Helvetica, Arial, "DejaVu Sans", "Liberation Sans", Freesans, sans-serif' }}>
            <div className="text-center mb-8 py-7">
                <h1 className="text-3xl font-bold">About Us</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={about} alt="aboutImage" className="w-full md:w-3/4 h-auto rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <p className="text-lg leading-relaxed mb-4">
                        Welcome to Tech With Munna! I'm Munna Kumar, a passionate web developer with a love for creating innovative and 
                        user-friendly applications. My journey into the world of programming started during my college days, where I discovered 
                        my fascination with crafting digital experiences that are both functional and visually appealing.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center mt-8">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={collegeImage} alt="collegeImage" className="w-full md:w-3/4 h-auto rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:pr-8">
                    <h1 className="text-3xl font-bold mb-4">My Background</h1>
                    <p className="text-lg leading-relaxed">
                        I completed my B.Tech in Computer Science and Engineering from IES College of Technology, Bhopal, 
                        where I gained a solid foundation in programming languages like C, Java, JavaScript, and React.js.
                        During my studies, I undertook a six-month training program at Jspiders, where I honed my skills in web development 
                        and gained practical experience in building dynamic websites.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mt-8">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <img src={vision} alt="visionImage" className="w-full md:w-3/4 h-auto rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h1 className="text-3xl font-bold mb-4">My Vision</h1>
                    <p className="text-lg leading-relaxed">
                        At Tech With Munna, my goal is to provide valuable resources, tutorials, and insights into the world of web development. 
                        I believe in the power of continuous learning and improvement, and I strive to share my knowledge and experiences with the 
                        community. Thank you for visiting Tech With Munna. I invite you to explore the site and join me on this exciting journey of innovation 
                        and creativity in the digital space.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
