// BookList.js
import React, { useEffect, useState } from 'react';

export const Booklist = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://api.itbook.store/1.0/search/javascript');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.books);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {books.map((book) => (
        <div key={book.isbn13} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
          <img className="w-full h-48 object-cover" src={book.image} alt={book.title} />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">{book.subtitle || 'Unknown Author'}</p>
          </div>
        </div>
      ))}
    </div>
  );
};