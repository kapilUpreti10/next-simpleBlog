"use client";
import React, { useState } from 'react'
import NavLink from './navLink'
import { IoMdMenu } from "react-icons/io";


const NavbarLink = () => {
    const links=[
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"},
        {name: "Blog", path: "/blog"},
    ]
    const isAdmin=true;
    const session=true;

  return (
    <div className='flex items-center gap-3'>
      {links.map((link)=>(
        <li key={link.path} ><NavLink item={link}/></li>
      ))}
      
      {
        session? (
          <div className='flex items-center sm:ml-5'>
          {
            isAdmin && (
              <NavLink item={{name:"Admin",path:"/admin"}} />
            )
          }
          <button className='px-2 bg-gradient-to-r from-red-500 to-pink-500 mx-5 rounded-lg py-2'>LogOut</button>
          </div>
        ):(
          <NavLink item={{name:"login",path:"/login"}} />

        )
      }
    </div>
  )
}

export default NavbarLink
