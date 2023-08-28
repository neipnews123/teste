import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImgFour from "../public/images/anuncio_dia_crianca.jpg";
import bannerImgTwo from "../public/images/anuncio_teatro_infantil.jpg";
import bannerImgThree from "../public/images/img_3.jpeg";
import bannerImgOne from "../public/images/img_4.jpeg";
import bannerImgFive from "../public/images/anuncio_dia_crianca.jpg";
import bannerImgSix from "../public/images/bannerImgThree.jpg";
import bannerImgSev from "../public/images/anuncio_teatro_infantil.jpg";


const Banner = () => {
  const router = useRouter();
  const [image, setImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 4 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);
  
  return (
    <div className="h-[350px] relative bg-cover" > 
    <div className="absolute top-0 right-0 w-full h-full transition-opacity z-0">
          <Image
            src={bannerImgFour}
            fill
            className={`${
              image === 1 ? "opacity-100" : "opacity-0"
            } transition-all duration-1000`}
            alt="bannerImgOne"
          />
          <Image
            src={bannerImgTwo}
            fill
            className={`${
              image === 2 ? "opacity-100" : "opacity-0"
            } transition-all duration-1000`}
            alt="bannerImgTwo"
          />
          <Image
            src={bannerImgFive}
            fill
            className={`${
              image === 3 ? "opacity-100" : "opacity-0"
            } transition-all duration-1000`}
            alt="bannerImgThree"
          />
          <Image     
            src={bannerImgSev}
            fill
            className={`${
              image === 4 ? "opacity-100" : "opacity-0"
            } transition-all duration-1000`}
            alt="bannerImgFour"
          />
          </div>
    </div>
    
  );
};

export default Banner;
