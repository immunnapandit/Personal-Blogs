import React from 'react';
import webprograms from "../../assets/Vision.jpg";
import webprograms1 from "../../assets/about.jpg";

const WebDevelopmentServices = () => {
    return (
        <div className="py-16 bg-gray-100 font-sans" style={{ fontFamily: '"Roboto", Helvetica, Arial, "DejaVu Sans", "Liberation Sans", Freesans, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Web Development Services</h2>
                    <p className="text-lg text-gray-600">
                        At Tech With Munna, we specialize in creating stunning and functional websites tailored to your business needs. Our web development services are designed to elevate your online presence and drive meaningful engagement with your audience.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
                        <div className="aspect-w-1 aspect-h-1 mb-4">
                            <img src={webprograms1} alt="Custom Website Development" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Website Development</h3>
                        <p className="text-gray-600">We build custom websites from scratch, tailored to your specific requirements and business goals. Our websites are designed to be visually appealing, user-friendly, and optimized for performance.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
                        <div className="aspect-w-1 aspect-h-1 mb-4">
                            <img src={webprograms} alt="Responsive Design" className="h-full w-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Responsive Design</h3>
                        <p className="text-gray-600">In today's mobile-driven world, having a responsive website is crucial. We ensure that your website looks and functions flawlessly across all devices, from desktops to smartphones.</p>
                    </div>

                    {/* Add similar items for other services */}
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
                    <ul className="mt-4 text-lg text-gray-600 space-y-2">
                        <li>
                            <strong className="font-bold">Industry Experience:</strong> With years of experience in web development, we have the expertise to deliver high-quality websites that meet and exceed industry standards.
                        </li>
                        <li>
                            <strong className="font-bold">Creative Solutions:</strong> We take a creative approach to web development, incorporating innovative design elements and features to make your website stand out.
                        </li>
                        <li>
                            <strong className="font-bold">Customer Satisfaction:</strong> Our priority is customer satisfaction, and we go above and beyond to ensure that our clients are happy with the final product.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WebDevelopmentServices;
