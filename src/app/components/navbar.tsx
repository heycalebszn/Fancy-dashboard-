"use client"

import Image from "next/image"
import { Logo } from "../assets/index"
import { Menu } from "lucide-react"

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

            <div className="flex gap-[20px]">
            <ul className="flex gap-6">
                {navLinks.map((navLink, index) => (
                    <li key={index}><a className="cursor-pointer font-md">{navLink.link}</a></li>
                ))}
            </ul>
            <Menu className="font-bold w-[37px]" />
            </div>
        </nav>
    )
}