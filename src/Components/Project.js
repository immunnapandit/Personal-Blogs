// Project.js
import React from "react";

const Project = ({ name, description }) => {
    return (
        <div className="p-4 border border-gray-300 shadow-md rounded-md mb-6">
            <h2 className="text-xl font-bold mb-2">{name}</h2>
            <p className="text-gray-700">{description}</p>
        </div>
    );
}

export default Project;
