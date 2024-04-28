import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className='mt-[100px] h-[calc(100vh-150px) max-w-[90vw] mx-auto md:flex md:justify-around'>
      <div>
      <Image src="/contact.png" width={400} height={100} alt='loading..'></Image>
      </div>
      <div className="bg-[#F9F9F9] rounded-lg shadow-md p-8 max-w-md w-full">
  <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
  <form action="#" method="POST" >
    <div className="mb-4">
      <label for="name" className="block font-bold mb-1">Name:</label>
      <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required placeholder='Kapil Upreti'/>
    </div>
    <div className="mb-4">
      <label for="email" className="block font-bold mb-1">Email:</label>
      <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required placeholder='example@gamil.com'/>
    </div>
    <div className="mb-4">
      <label for="contact" className="block font-bold mb-1">Contact Number:</label>
      <input type="text" id="contact" name="contact" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required placeholder='9840000000'/>
    </div>
    <div className="mb-4">
      <label for="message" className="block font-bold mb-1">Message:</label>
      <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 resize-y" rows="4" required placeholder='Hello world..'></textarea>
    </div>
    <button type='reset' className='bg-red-500 text-white px-4 py-2 rounded-md mr-5 hover:bg-red-600'>Reset</button>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
  </form>
  </div> 
</div>
  )
}

export default ContactPage
