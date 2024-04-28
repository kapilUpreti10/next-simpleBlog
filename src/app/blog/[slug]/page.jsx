import React from 'react'
import Image from 'next/image'

const PostPage = () => {
  return (
    <div className='mt-[100px] max-w-[90vw] mx-auto flex flex-col items-center sm:flex-row sm:justify-between sm:gap-20 '>
      <div className='flex-3'>
        <Image src="/khumai.jpg" alt='laoding' width={320} height={120}></Image>
      </div>
      <div className='my-5 mx-4 md:flex-1'>
        <div>
        <h1 className='text-3xl font-semibold'>Post Title</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quae quisquam deleniti nihil minus accusamus reprehenderit amet, tempora iusto repellat in quasi magni quam itaque dolor officiis sunt natus possimus omnis repudiandae facilis dicta tempore quod. Maxime unde expedita iusto consequatur, provident repellendus consequuntur perferendis rem dolor vero, ea nemo? Voluptas quae labore enim. Neque debitis in nihil a odio, maiores dolore ea quo, dolorem libero est, officia delectus maxime! Sit mollitia consequatur aut illum culpa accusamus, quos fugiat veniam.</p>
        </div>
        <div className='flex flex-row justiy-between mt-10 gap-9 '>
          <div className='rounded-full'>
           <Image src="/dog.png" width={50} height={50}></Image>
          </div>
          <div>
             <h2 className='font-semibold text-xl'>Author</h2>
              <p>Author-name</p>
          </div>
          <div>
             <h2 className='text-xl font-semibold'>Published</h2>
             <p>2022-23-34</p>
          </div>
          
        </div>

        </div>
      </div>
  )
}

export default PostPage
