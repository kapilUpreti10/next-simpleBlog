"use client";
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import FetchAuthor from '@/components/fetchAuthor/FetchAuthor';
// import { getPost } from '@/lib/data';
import { getPost } from '@/lib/dbData';

const PostPage = async({ params }) => {
  const { slug } = params;
  console.log(slug);
  const [post, setPost] = useState({}); // Initialize post as empty array we cannot do null because we are using post.title and post.body in jsx

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const data = await getPost(slug);

  //       // const response= await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  //       // if(!response.ok) throw new Error('Failed to fetch post data');
  //       // const data = await response.json();

  //     } catch (error) {
  //       console.error('Error fetching post data:', error);
  //     }
  //   };

  //     fetchData();
  // }, [slug]);


  const data = await getPost(slug);
  setPost(data);


console.log(post)
  // Render post data
  return (
    <div className='mt-[100px] max-w-[90vw] mx-auto flex flex-col items-center sm:flex-row sm:justify-between sm:gap-20'>
      <div className='flex-3'>
        <Image src="/khumai.jpg" alt='Loading' width={320} height={120} />
      </div>
      <div className='my-5 mx-4 md:flex-1'>
        {   post && 
        <div>
          <h1 className='text-3xl font-semibold'>{post.title}</h1>
          <p>{post.body}</p>
        </div>
         }
        <div className='flex flex-row justiy-between mt-10 gap-9 '>
          <div className='rounded-full'>
            <Image src="/dog.png" width={50} height={50} alt='loading..'/>
          </div>
          <div>
            <h2 className='font-semibold text-xl'>Author</h2>
            <Suspense fallback={<p>Loading author...</p>}>
              {post.createdBy && <FetchAuthor userId={post.createdBy}/>}
            </Suspense>
          </div>
          <div>
            <h2 className='text-xl font-semibold'>Published</h2>
            <p>2022-2-12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
