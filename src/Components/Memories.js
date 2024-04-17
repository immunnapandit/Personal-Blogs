import React from "react";
import munnaImage from "../assets/munna.jpg";

const Memories = () => {
    return (
        <div className="h-screen flex flex-col overflow-x-hidden overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-3xl md:text-5xl text-center mb-20">My Memories</h1>
                <div className="flex flex-wrap justify-between">
                    <figure className="w-full md:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md">
                    <img src={munnaImage} alt="memoriesphoto" className="w-full h-full object-cover filter drop-shadow-lg" />
                        <figcaption className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent text-white px-6 py-4 text-base font-semibold opacity-0 transition-opacity duration-300">
                            Munna
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Memories;
