import React, { useState } from 'react';
import { CommonHeaTittle } from './CommonHeaTittle';

export const Contact = () => {
  const [title] = useState("Contact Us");
  const [body] = useState("This is the body of the contact section.");

  return (
    <>
      <CommonHeaTittle title={title} body={body} />
      <div className="p-6 bg-lavender rounded-lg shadow-lg max-w-lg mx-auto">
        <form className="mt-4 space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-2 border border-thistle rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-2 border border-thistle rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 p-2 border border-thistle rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}