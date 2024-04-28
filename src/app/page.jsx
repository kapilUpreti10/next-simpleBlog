import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='max-w-[84vw] mx-auto mt-[100px] h-[calc(100vh-150px) flex flex-col items-center'>
      <div className=''>
        <div className='flex flex-col gap-5 items-center'>
        <h1 className='text-4xl text-red-500 '>Hello World..</h1>
        <Image src="/dog.png" alt="hero" width={400} height={300} />
        <p className='text-xl'>This is the world where no want to live. So wait for me.This is the fact and the reality of today society and this is what it is.This is also the truth that Messi is the GOAT of football and he is far better than any player in the world right here right now and this the harsh truth that everyone should accpet now and move on the life and this is also one of the reaosn why I love Messi- The ulitimate goat of football</p>
        </div>
        </div>
        <div className='my-5'>
          <button className='p-3 bg-[#2294ed] rounded-md mx-5 text-white hover:text-white hover:ease-in-out hover:bg-black'>Contact Me</button>
          <button className='text-white bg-black p-3 hover:text-white hover:bg-[#2294ed] rounded-md'>Hire Me</button>
        </div>
      </div>

  )
}

export default Home
