import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='max-w-[84vw] mx-auto mt-[100px] h-[calc(100vh-150px) flex flex-col items-center'>
      <div className=''>
        <div className='flex flex-col gap-5 items-center'>
        <h1 className='text-4xl text-red-500 '>Hello World..</h1>
        <Image src="/dog.png" alt="hero" width={400} height={300} />
        <p className='text-xl'>Hi, I'm Kapil, and I'm thrilled to welcome you to our corner of the internet.I'm passionate about sharing stories, insights, and knowledge on a variety of topics. Whether you're looking for the latest trends in technology, tips for personal development, or heartwarming tales of travel adventures, you'll find it all here.I bring diverse perspectives and experiences to the table, ensuring that there's something for everyone. From thought-provoking opinion pieces to practical how-to guides, we aim to inform, entertain, and inspire our readers.So grab a cup of coffee, cozy up, and explore the world of ideas with us . Let's embark on this journey together!

</p>
        </div>
        </div>
        <div className='my-5'>
          <button className='p-3 bg-[#2294ed] rounded-md mx-5 text-white hover:text-white hover:ease-in-out hover:bg-black'><Link href="/contact">Contact Me</Link></button>
          <button className='text-white bg-black p-3 hover:text-white hover:bg-[#2294ed] rounded-md'>Hire Me</button>
        </div>
      </div>

  )
}

export default Home
