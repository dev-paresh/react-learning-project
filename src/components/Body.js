import React from 'react';

export const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-lavender-100 p-4">
            <h1 className="text-4xl font-bold text-center text-lavender-600 mb-4 animate-bounce">Welcome to Our Bookstore</h1>
            <p className="text-lg text-center text-gray-700 mb-6">
                Dive into a world of knowledge and adventure. Discover your next favorite book today!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                {/* Placeholder Cards with Different Animations */}
                <div className="bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg animate-fadeIn">
                    <h2 className="font-semibold text-lg">Featured Category 1</h2>
                    <p className="text-gray-500">Explore the best in fiction.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg animate-fadeIn delay-200">
                    <h2 className="font-semibold text-lg">Featured Category 2</h2>
                    <p className="text-gray-500">Discover new non-fiction titles.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg animate-fadeIn delay-400">
                    <h2 className="font-semibold text-lg">Featured Category 3</h2>
                    <p className="text-gray-500">Dive into children's literature.</p>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-lavender-600 mb-4 animate-slideIn">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li className="animate-fadeIn delay-300">Wide selection of books across genres</li>
                    <li className="animate-fadeIn delay-300">Expert recommendations and reviews</li>
                    <li className="animate-fadeIn delay-300">Exclusive member discounts and offers</li>
                </ul>
            </div>

            <button className="bg-lavender-600 text-white px-6 py-3 rounded-lg hover:bg-lavender-700 transition-colors duration-300 transform hover:scale-105 animate-buttonEntrance">
                Explore More
            </button>
        </div>
    );
}