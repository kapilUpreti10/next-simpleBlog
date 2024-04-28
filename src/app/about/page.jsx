import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className='mt-[100px] h-[calc(100vh-150px) max-w-[90vw] mx-auto flex flex-col items-center md:flex-row md:justify-around'>
      <div className='md:w-[40%]'>
        <Image src="/support.png" alt='image..' width={490} height={50}></Image>
      </div>
      <div className='flex flex-col items-center my-5 md:w-[50%]'>
         <h1 className='text-3xl font-semibold '>About Me..</h1>
         <p className='text-[1.2rem] mt-2'>Hello, I am Kapil, an engineer with a passion for football. From tinkering with gadgets to diving into complex engineering problems, I thrive on challenges. Off the field, youll find me immersed in the beautiful game, with Lionel Messi as my idol. His unparalleled skill and dedication inspire me both on and off the pitch. Football isnt just a game for me; its a way of life. Whether its playing with friends or cheering for my favorite team, the thrill of the game keeps me energized and motivated. I believe in chasing dreams with the same fervor as Messi on the field.
</p>
      </div>
    </div>
  )
}

export default AboutPage
