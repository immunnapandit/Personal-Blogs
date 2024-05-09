const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md">
                <h1 className="text-3xl font-bold text-red-500 mb-4">Oops! Something went wrong</h1>
                <p className="text-gray-700">The page you are looking for could not be found.</p>
            </div>
        </div>
    );
};

export default Error;
