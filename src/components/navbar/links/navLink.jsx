"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({item}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathName= usePathname();
    console.log(pathName);
      return (
<Link href={item.path} className={`${pathName===item.path? "bg-[#2294ed] p-2 text-white rounded-md ":""}hover:text-green-500`}>{item.name}</Link>  )
}

export default NavLink
