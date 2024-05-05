import React, { useState } from "react";
import contactImage from "../assets/contactImage.jpg"; // Update the path to your image

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('http://localhost:3001/submit-form', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });
          const data = await response.json();
          console.log(data); // Log the response from the backend
          // Reset the form after successful submission
          setFormData({
              name: "",
              email: "",
              subject: "",
              message: ""
          });
      } catch (error) {
          console.error('Error:', error);
      }
  };
  

    return (
        <div className="max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 flex justify-center">
                <img src={contactImage} alt="Contact" className="w-full md:max-w-md rounded-lg" />
            </div>
            <div className="md:w-1/2 p-8">
                <h1 className="text-2xl font-bold mb-4">GET IN TOUCH</h1>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block font-bold mb-2">Subject</label>
                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block font-bold mb-2">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" required />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
