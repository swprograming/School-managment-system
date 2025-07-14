import React, { useState, useEffect } from 'react';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Digital Library</h1>
      {error && <p className="text-center text-red-600">{error}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <div key={index} className="bg-white dark:bg-black dark:text-white p-4 rounded-lg shadow-lg">
            <img src={book.coverImage} alt={book.title} className="w-full h-60 object-cover mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{book.title}</h3>
            <a
              href={book.downloadUrl}
              download
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
