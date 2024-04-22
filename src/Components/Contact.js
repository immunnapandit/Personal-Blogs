const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg flex flex-col sm:flex-row mb-16">
        <div className="w-full sm:w-1/2 pr-8">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-700 mb-8">
            Here, you can contact me for any type of <span className="text-blue-500">Query</span>. Thanks For Visiting!
          </p>
          <div className="mb-4">
            <div className="font-bold">Name</div>
            <div>Munna Kumar Pandit</div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Address</div>
            <div>Siwan, Bihar</div>
          </div>
          <div className="mb-4">
            <div className="font-bold">Email</div>
            <div className="text-green-500">munnapandit2002@gmail.com</div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 pl-0 sm:pl-8">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <button type="submit" className="inline-block px-6 py-3 mt-4 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
