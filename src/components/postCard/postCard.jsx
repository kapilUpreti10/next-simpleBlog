import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({params,searchParams,item}) => {
  //console.log(params,searchParams);
  console.log(item);
  console.log(item.slug);
  return (
    <>
    <div className='max-w-[90vw] mx-auto mt-[100px] flex flex-col items-center md:flex-row  md:justify-around md:gap-20'>
      <div className='rounded-lg overflow-hidden md:flex-3'>
      <Image src={item.img} alt="Post Image" width={400} height={300} />
      </div>
      <div className='mt-5 md:flex-1'>
        <h2 className='text-3xl font-semibold text-green-500'>{item.title}</h2>
        <p>{item.body}</p>
        <Link href={`/blog/${item.slug}`} className='text-blue-500 underline'>Read More</Link>
        </div>
    </div>
        <hr className='w-full border-t border-gray-300 mt-4' />     
        </> 
  )
}

export default PostCard
