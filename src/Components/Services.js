import React from 'react';
import BusinessConsultancy from '../assets/BusinessConusultancy.jpg';
import Ecommerce from '../assets/Ecommerce.jpg';
import GraphicDesign from '../assets/GraphicDesign.jpg';
import Seo from '../assets/SEO.jpg';
import ResearchDevelopment from "../assets/ResearchDevelopment.jpg";
import WebDevelopment from "../assets/WebDevelopment.jpg";

const Services = () => {
    const services = [
        {
            id: 1,
            url: WebDevelopment,
            title: "Web Development"
        },
        {
            id: 2,
            url: GraphicDesign,
            title: "Graphic Design"
        },
        {
            id: 3,
            url: Seo,
            title: "Search Engine Optimization"
        },
        {
            id: 4,
            url: BusinessConsultancy,
            title: "Business Consultancy"
        },
        {
            id: 5,
            url: ResearchDevelopment,
            title: "Research & Development"
        },
        {
            id: 6,
            url: Ecommerce,
            title: "E-commerce Development"
        }

    ];

    return (
        <>
            <div className="services container mx-auto py-8">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((element) => (
                        <div key={element.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <img src={element.url} alt={element.title} className="mx-auto mb-4 rounded-full h-40 w-40 sm:h-48 sm:w-48 object-cover" />
                            <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae justo tristique, ac bibendum erat sagittis. Nullam id felis ut ligula aliquet fermentum.</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;
