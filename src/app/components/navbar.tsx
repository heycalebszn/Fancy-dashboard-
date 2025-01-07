"use client"

import Image from "next/image"
import { Logo } from "../assets/index"
import { TbMenu3 } from "react-icons/tb"

export const Navbar = () => {
    const navLinks = [
        {
            link: "home"
        },
        {
            link: "support"
        },
        {
            link: "my account"
        },
    ]
    return(
        <nav className="flex justify-between items-center">
            <Image src={Logo} alt="dashboard logo" className="w-[100px]" />

            <div className="flex items-center">
            <ul className="flex gap-6">
                {navLinks.map((navLink, index) => (
                    <li key={index}><a className="cursor-pointer font-md text-[0.9rem]">{navLink.link}</a></li>
                ))}
            </ul>
            <TbMenu3 className="font-bold text-[30px] ml-[40px]" />
            </div>
        </nav>
    )
}