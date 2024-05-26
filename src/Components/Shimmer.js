// Shimmer.js
import React from 'react';
import '../App.css';

const Shimmer = ({ width, height }) => {
    return (
        <div className="shimmer-wrapper" style={{ width, height }}>
            <div className="shimmer"></div>
        </div>
    );
};

export default Shimmer;
