import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = () => {
  return (
    <>
    <div className='max-w-[90vw] mx-auto mt-[100px] flex flex-col items-center md:flex-row md:flex-nowrap md:justify-around'>
      <div className='rounded-lg overflow-hidden'>
      <Image src="/home.png" alt="Post Image" width={300} height={200}  />
      </div>
      <div className='mt-5'>
        <h2 className='text-3xl font-semibold text-green-500'>Post Title</h2>
        <p>Post Content</p>
        <Link href="/blog/post" className='text-blue-500 underline'>Read More</Link>
        </div>
    </div>
        <hr className='w-full border-t border-gray-300 mt-4' />     
        </> 
  )
}

export default PostCard
