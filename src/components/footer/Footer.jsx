import React from 'react'
import styles from "./footer.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  const date=new Date().getFullYear();
  return (
    <div className='flex flex-col flex-nowrap  items-center text-md mt-10 h-[80px] bg-green-200 md:flex-row md:justify-around md:items-center'>
      <div>
      <span>&copy; From Kapil-{date} </span>
      </div>
      <div>
        <ul className="flex flex-row flex-nowrap gap-8 mt-5">
          <li className={styles.item}><Link href="https://www.facebook.com/profile.php?id=100092490999340" target='_main'><FaFacebook size={30}/></Link></li>
          <li className={styles.item}><Link href="https://github.com/kapilUpreti10" target='_main'><FaGithub size={30}/></Link></li>
          <li className={styles.item}><Link href="https://www.linkedin.com/in/kapil-upreti-5a2676296" target='_main'><FaLinkedin size={30}/></Link></li>
          <li className={styles.item}><Link href="https://www.youtube.com/@kapilupreti10" target='_main'><FaYoutube size={30}/></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
