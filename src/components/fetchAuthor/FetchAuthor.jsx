import React, { useState, useEffect } from 'react';

const FetchAuthor = ({ userId }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setAuthor(data);
        })
        .catch(error => {
          console.error('Error fetching author data:', error);
        });
    };

    fetchData();
  }, [userId]);

  return (
    <>
      {author && <p>{author.name}</p>}
    </>
  );
};

export default FetchAuthor;
