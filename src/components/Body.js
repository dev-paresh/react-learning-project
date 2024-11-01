import React from 'react';

export const Body = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-lavender-100">
            <h1 className="text-4xl font-bold text-center text-lavender-600 mb-4 animate-bounce">Welcome to Our Bookstore</h1>
            <p className="text-lg text-center text-gray-700 mb-6">
                Dive into a world of knowledge and adventure. Discover your next favorite book today!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {/* Placeholder Cards */}
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-fadeIn">
                    <h2 className="font-semibold text-lg">Featured Item 1</h2>
                    <p className="text-gray-500">Some description here.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-fadeIn">
                    <h2 className="font-semibold text-lg">Featured Item 2</h2>
                    <p className="text-gray-500">Some description here.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 animate-fadeIn">
                    <h2 className="font-semibold text-lg">Featured Item 3</h2>
                    <p className="text-gray-500">Some description here.</p>
                </div>
            </div>
            <button className="bg-lavender-600 text-white px-6 py-3 rounded-lg hover:bg-lavender-700 transition-colors duration-300 transform hover:scale-105">
                Explore More
            </button>
        </div>
    );
}