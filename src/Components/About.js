// AboutUs.js
const About = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md mb-8">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-1 bg-gray-800 text-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                    <p className="mb-4">Meet our amazing team of experts.</p>
                </div>
                <div className="col-span-2 bg-gray-800 text-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
                <div className="col-span-3 bg-gray-800 text-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
