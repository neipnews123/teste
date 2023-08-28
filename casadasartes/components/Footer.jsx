import Image from "next/image";
import logoLight from "../public/images/logoLight.png";
import {
  BsFacebook,
  BsYoutube,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-black text-white hover:text-red-600 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={logoLight} width={80} height={80} alt="logo" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            Casa das artes || all rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
      
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
  );
};

export default Footer;
