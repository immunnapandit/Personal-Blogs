import React from "react";

const Blogs = () => {
    // Sample list of blog posts
    const blogPosts = [
        {
            title: "How to Link PAN to Aadhaar",
            content: "A Step-by-Step Guide to Linking PAN Card with Aadhaar Card Mehods to Link to Aadhar               ",
            author: "techwithmunna",
            date: "April 22, 2024"
        },
        {
            title: "Second Blog Post",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
            author: "Your Name",
            date: "April 21, 2024"
        }
        // Add more blog posts as needed
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 py-8">Blogs</h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-2">{post.date} by {post.author}</p>
                        <p className="text-gray-800">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs ;
