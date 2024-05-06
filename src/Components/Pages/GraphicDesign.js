import React from 'react';
import graphicDesignImage1 from "../../assets/GraphicDesign.jpg";
import graphicDesignImage2 from "../../assets/SEO.jpg";

const GraphicDesignServices = () => {
    return (
        <div className="py-16 bg-gray-100 font-sans" style={{ fontFamily: '"Roboto", Helvetica, Arial, "DejaVu Sans", "Liberation Sans", Freesans, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Graphic Design Services</h2>
                    <p className="text-lg text-gray-600">
                        At Tech With Munna, we offer a wide range of graphic design services to help your brand stand out. From logo design to branding materials, we've got you covered.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
                        <img src={graphicDesignImage1} alt="Logo Design" className="mb-4 rounded-full h-24 w-24 object-cover mx-auto" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Logo Design</h3>
                        <p className="text-gray-600">We create unique and memorable logos that reflect your brand's identity and values.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
                        <img src={graphicDesignImage2} alt="Branding Materials" className="mb-4 rounded-full h-24 w-24 object-cover mx-auto" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Branding Materials</h3>
                        <p className="text-gray-600">From business cards to brochures, we design branded materials that leave a lasting impression.</p>
                    </div>

                    {/* Add similar items for other services */}
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
                    <ul className="mt-4 text-lg text-gray-600 space-y-2">
                        <li>
                            <strong className="font-bold">Creative Designs:</strong> Our team of designers is skilled in creating visually appealing and innovative designs.
                        </li>
                        <li>
                            <strong className="font-bold">Brand Consistency:</strong> We ensure that all your design elements are consistent with your brand's identity and message.
                        </li>
                        <li>
                            <strong className="font-bold">Client Collaboration:</strong> We work closely with our clients to understand their vision and deliver designs that exceed their expectations.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GraphicDesignServices;
