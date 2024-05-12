import React from "react";
import munnaImage from "../assets/munna.jpg";
import Services from "./Services";

const Body = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center py-10 md:py-18 m-4 md:m-20">
                <div className="max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg md:mr-10 mb-4 md:mb-0">
                    <img src={munnaImage} alt="munnaimage" className="w-full rounded-full" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="nij-manrope-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 md:mb-4 lg:mb-6 px-4 md:px-0">
                        Welcome to <span style={{ color: '#ff0000' }}>Tech</span>with<span style={{ color: '#3182ce' }}>munna</span><br />
                        <span className="text-blue-500">I'm</span> Munna, a passionate<br />
                        <span className="typing">Software Engineer</span>
                    </h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>window.open
                        ("https://www.linkedin.com/in/immunnapandit/", "_blank")}>
                        Linkedin Profile
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <Services />
            </div>
        </div>
    );
}

export default Body;
//Munna