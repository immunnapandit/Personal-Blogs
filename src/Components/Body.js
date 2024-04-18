import React from "react";
import munnaImage from "../assets/munna.jpg";

const Body = () => {
    return (
        <div className="flex flex-col md:flex-row items-center py-18 m-20">
            <div className="max-w-sm md:mr-10 mb-10 md:mb-0">
                <img src={munnaImage} alt="munnaimage" className="w-full rounded-full" />
            </div>
            <div className="text-center md:text-left">
                <h1 className="nij-manrope-bold text-3xl md:text-5xl mb-4 md:mb-6">
                    Hey there ✌️ I'm Munna,<br />
                    an <span className="text-blue-500">Software Engineer</span>,<br />
                    based in India 🇮🇳
                </h1>
            </div>
        </div>
    );
}

export default Body;
