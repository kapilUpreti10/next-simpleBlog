import React, { useState, useEffect } from 'react';
//import { getUser } from '@/lib/data';
import {getUser} from '@/lib/dbData'

const FetchAuthor = async({ userId }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" })
      //   .then(response => {
      //     if (!response.ok) {
      //       throw new Error(`HTTP error! status: ${response.status}`);
      //     }
      //     return response.json();
      //   })
      //   .then(data => {
      //     setAuthor(data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching author data:', error);
      //   });

      // fetching data from db
      const user = getUser(userId);
      setAuthor(user);
    };

    fetchData();

   // setAuthor(user);
  }, [userId]);


  //const author = await getUser(userId);


  return (
    <>
      {author && <p>{author.name}</p>}
    </>
  );
};

export default FetchAuthor;
