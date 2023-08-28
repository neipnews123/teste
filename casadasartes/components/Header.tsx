import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import logoDark from "../public/images/logoDark.png";

import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsInstagram
} from "react-icons/bs";

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
    {/** border-b-black  bg-black */}
    <div className="w-full h-20 border-b-[1px] border-b-black  bg-black    font-titleFont sticky top-0  z-50 px-4">
      <div className="max-w-7xl h-full  mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={80} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div>
          <ul className="hidden  lg:inline-flex gap-10 font-sans uppercase text-sm font-semibold text-white">
          <Link href="/"> <li className="headerLi tracking-wide">Início</li></Link>
          <Link href='/formacoes' className={activeLink == "/formacoes" ? "activeLink" : "none"}>
            <li className="headerLi tracking-wide">Formações</li>
            </Link>
            <Link href='/agenda' className={activeLink == "/agenda" ? "activeLink" : "none"}>
            <li className="headerLi tracking-wide ">Agenda</li>
            </Link>
            
            <Link href='/galeria' className={activeLink == "/galeria" ? "activeLink" : "none"}>
            <li className="headerLi tracking-wide">Galeria</li>
            </Link>
           
            <Link href='/about' className={activeLink == "/about" ? "activeLink" : "none"}>
            <li className="headerLi tracking-wide">Sobre</li>
            </Link>
            <Link href='/contactos' className={activeLink == "/contactos" ? "activeLink" : "none"}>
            <li className="headerLi tracking-wide">Contactos</li>
            </Link>
          </ul>
        </div>
        
        <div className="flex items-center gap-16 text-lg">
          <div className="flex p-3 items-center gap-10">
         
  
          <a
              href="https://www.facebook.com/CasaDasArtesLuanda"
              className="text-red-700 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
               <BsFacebook className="w-6 h-6 text-red-600 hover:text-white duration-300 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/casadasartes.angola/"
              className="text-red-700 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
               <BsInstagram className="w-6 h-6 text-red-600  hover:text-white duration-300 cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/@casadasartes.angola"
              className="text-red-700 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="w-6 h-6 text-red-600 hover:text-white duration-300 cursor-pointer" />
            </a>
       
        
         
          </div>
          
        </div>

        
      </div>

      
    </div>
    </>
  );
};

export default Header;
