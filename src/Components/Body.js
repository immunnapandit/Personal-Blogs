import React from "react";
import BodyImage from "../assets/bodyimage1.jpg";
import OverlayImage from "../assets/munna.jpg"; // Import the new image
import Services from "./Services";
import Community from "./Community";
import About from "./About";

const Body = () => {
    return (
        <div className="flex flex-col">
            <div className="relative w-full h-screen overflow-hidden">
                <img alt="Body" src={BodyImage} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-start mx-4 md:mx-16 lg:mx-32 xl:mx-72 p-4">
                    <span className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-left font-serif">
                        Success is a <br />
                        progressive <br />
                        idea worth <br />
                        pursuing
                    </span>
                </div>
                <img alt="Overlay" src={OverlayImage} className="absolute bottom-0 right-0 w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-48 xl:h-48 object-cover m-4" />
            </div>
            <div className="flex justify-center px-4 md:px-8 lg:px-16 xl:px-32">
                <About/>
            </div>

            <div className="flex justify-center px-4 md:px-8 lg:px-16 xl:px-32">
                <Services />
            </div>
            <div className="flex justify-center px-4 md:px-8 lg:px-16 xl:px-32">
                <Community />
            </div>
        </div>
    );
}

export default Body;
