const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 sm:h-24 sm:w-24 text-red-500 mb-8"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 0 1 7.071 2.929A10 10 0 0 1 20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm.707 3.293a1 1 0 0 0-1.414 0L6.293 7.586a1 1 0 0 0 1.414 1.414L10 4.414l2.293 2.293a1 1 0 1 0 1.414-1.414L11.414 3.293zM10 13a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1zm1-5a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1z"
                />
            </svg>
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-red-500 mb-4">Oops!!! Something went wrong</h1>
                <p className="text-gray-700">We apologize for the inconvenience. Please try again later.</p>
            </div>
        </div>
    )
}

export default Error;
