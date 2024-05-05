import React from 'react';
import BusinessConsultancy from '../assets/BusinessConusultancy.jpg';
import Ecommerce from '../assets/Ecommerce.jpg';
import GraphicDesign from '../assets/GraphicDesign.jpg';
import Seo from '../assets/SEO.jpg';
import ResearchDevelopment from '../assets/ResearchDevelopment.jpg';
import WebDevelopment from '../assets/WebDevelopment.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            id: 1,
            url: WebDevelopment,
            title: 'Web Development',
            description: 'We specialize in creating stunning and functional websites tailored to your business needs.',
            path: '/web-development'
        },
        {
            id: 2,
            url: GraphicDesign,
            title: 'Graphic Design',
            description: 'Our graphic designers can help you create captivating visuals for your brand.'
        },
        {
            id: 3,
            url: Seo,
            title: 'Search Engine Optimization',
            description: 'Improve your website\'s visibility on search engines and drive more organic traffic.'
        },
        {
            id: 4,
            url: BusinessConsultancy,
            title: 'Business Consultancy',
            description: 'Get expert advice and guidance to grow your business and achieve your goals.'
        },
        {
            id: 5,
            url: ResearchDevelopment,
            title: 'Research & Development',
            description: 'Our R&D team is dedicated to innovation and finding new solutions to complex problems.'
        },
        {
            id: 6,
            url: Ecommerce,
            title: 'E-commerce Development',
            description: 'Start selling online with our custom e-commerce solutions designed for your business.'
        }
    ];

    return (
        <div className="services container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((element) => (
                    <Link key={element.id} to={element.path}>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <img src={element.url} alt={element.title} className="mb-4 rounded-full h-40 w-40 object-cover" />
                            <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
                            <p className="text-gray-700 text-center">{element.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Services;