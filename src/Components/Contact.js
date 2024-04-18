import React from 'react'

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl text-center mb-4">Contact Us</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 text-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Your Name" />

          <label htmlFor="email" className="block mt-4 mb-2 text-sm font-medium text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 text-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Your Email" />

          <label htmlFor="message" className="block mt-4 mb-2 text-sm font-medium text-gray-600">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 text-sm border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" placeholder="Your Message"></textarea>

          <button type="submit" className="w-full mt-6 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
