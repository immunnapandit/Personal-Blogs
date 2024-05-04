// AboutUs.js
import React from 'react';
import munnaImage from '../assets/munna.jpg'; // Import your photo

const AboutUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <div className="flex items-center mb-8">
                    <img src={munnaImage} alt="munnaimage" className="w-64 h-64 rounded-full mr-4" />
                    <div className="about-content">
                        <div className="right" style={{ width: '55%' }}>
                            <div className="text" style={{ fontSize: '25px', fontWeight: '600', marginBottom: '10px' }}>
                                I'm Munna Kumar Pandit and I'm a <span style={{ color: 'crimson' }}>Software Engineer</span>
                            </div>
                            <p style={{ textAlign: 'justify' }}>
                                I am a Final year B.Tech student currently pursuing my major in computer science from IES College of Technology, Bhopal. Having an inquisitive and receptive nature has helped me to achieve strong academic records. I Live in Bhopal. I Know Programming Language Like C/C++,Python. Right Now I am Looking For an Opportunity in Reputed Software Company Where I can Show Case My Technical Skills and Learn new Things From There That's all About Me Thank you !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
