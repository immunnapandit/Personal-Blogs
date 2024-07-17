import React, { useState } from "react";
import contactImage from "../assets/contactImage.jpg";
import "../App.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3001/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setSubmitStatus('success');

            // Reset the form after successful submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row items-center transition-opacity duration-500">
            <div className="md:w-1/2 flex justify-center animate-fadeIn">
                <img src={contactImage} alt="Contact" className="w-full md:max-w-md rounded-lg" />
            </div>
            <div className="md:w-1/2 p-8 animate-fadeIn">
                <h1 className="text-2xl font-bold mb-4">GET IN TOUCH</h1>
                {submitStatus === 'success' && <p className="text-green-500">Message sent successfully!</p>}
                {submitStatus === 'error' && <p className="text-red-500">Error sending message. Please try again later.</p>}
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block font-bold mb-2">Subject</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-bold mb-2">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300" required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
