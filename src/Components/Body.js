import React from "react";
import munnaImage from "../assets/munna.jpg";
import Services from "./Services";

const Body = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center py-18 m-20" >
                <div className="max-w-sm md:mr-10 mb-10 md:mb-0">
                    <img src={munnaImage} alt="munnaimage" className="w-full rounded-full" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="nij-manrope-bold text-3xl md:text-5xl mb-4 md:mb-6 px-36">
                        Welcome to <span style={{ color: '#ff0000' }}>Tech</span>with<span style={{ color: '#3182ce' }}>munna</span><br />
                        <span className="text-blue-500">I'm</span> Munna, a passionate<br />
                        <span className="typing">Software Engineer</span>
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <Services />
            </div>
        </div>
    );
}

export default Body;
