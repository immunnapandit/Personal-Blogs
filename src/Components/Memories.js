import React from "react";
import munnaImage from "../assets/munna.jpg";
import mumbaiImage from "../assets/munna1.jpeg";
import officeImage from "../assets/munna2.jpeg";
import resImage from "../assets/munna3.jpeg";
import collegeImages from "../assets/munna4.jpeg";
import friendsImage from "../assets/munna5.jpeg";
import stationImages from "../assets/munna6.jpeg";
import ColllegeImages from "../assets/munna9.jpeg";
import gauravfriends from "../assets/munna7.jpeg";
import rajabhoj from "../assets/rajabhoj.jpeg"
import rajabhoj1 from "../assets/rajabhoj1.jpeg"
import mahakal from "../assets/mahakal.jpeg"
import juhubeach from "../assets/juhubeach.jpeg"
import juhubeach1 from "../assets/juhubeach1.jpeg"
import sky from "../assets/sky.jpeg";


const Memories = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-3xl md:text-5xl text-center mb-20">My Memories</h1>
                <div className="flex flex-wrap justify-between">
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={munnaImage} alt="memoriesphoto" className="w-full h-full object-cover filter drop-shadow-lg py-3" />
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={mumbaiImage} alt="memories" className="w-full h-full object-cover filter drop-shadow-lg py-3" />
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={officeImage} alt="memories" className="w-full h-full object-cover filter drop-shadow-lg py-3" />
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={resImage} alt="memories" className="w-full h-full object-cover filter drop-shadow-lg py-3" />
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={collegeImages} alt="memories" className="w-full h-full object-cover filter drop-shadow-lg py-3" />
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={stationImages} alt="memories" className="w-full h-full object-cover filter drop-shadow-lg py-3" />
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={friendsImage} alt="memories" className=""></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={ColllegeImages} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={gauravfriends} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={rajabhoj} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={rajabhoj1} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={mahakal} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={juhubeach} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={juhubeach1} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                    <figure className="w-full md:w-1/2 lg:w-1/3 card mb-8 md:mb-0 transform transition-transform hover:scale-103 hover:shadow-md px-4">
                        <img src={sky} alt="memories" className="h-full w-full object-cover"></img>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Memories;
