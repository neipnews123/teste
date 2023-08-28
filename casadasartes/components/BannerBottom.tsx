import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImgOne from "../public/imgs/1_conteporanea.png";
import bannerImgTwo from "../public/imgs/2_teatro.png";
import bannerImgThree from "../public/imgs/3_hipohop.png";
import bannerImgFour from "../public/imgs/4_guitarra.png";
import Image from "next/image";

const BannerBottom = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="w-full h-full flex justify-start">
        <div className="w-full h-full flex-grow mx-0 py-0 relative">
          <Image
            src={bannerImgOne}
            alt="bannerImgOne"
            className="object-fill h-192 w-384 mx-0 py-0"
          />
          <div className="absolute inset-0 mx-10 flex items-end ">
            <p className="text-white text-left mx-4 py-12 text-5xl font-sans font-light tracking-wide">Dança <br></br>
            Contemporanêa</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-start">
        <div className="w-full h-full flex-grow mx-0 py-0 relative">
          <Image
            src={bannerImgTwo}
            alt="bannerImgTwo"
            className="object-fill h-192 w-384 mx-0 py-0"
          />
          <div className="absolute inset-0 mx-10 flex items-end ">
            <p className="text-white text-left mx-4 py-12 text-5xl font-sans font-light tracking-wide">Aulas de <br></br>
            Teatro</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-start mx-0 py-0">
        <div className="w-full h-full flex-grow relative">
          <Image
            src={bannerImgThree}
            alt="bannerImgThree"
            className="object-fill h-192 w-384 mx-0 py-0"
          />
          <div className="absolute inset-0 mx-10 flex items-end ">
            <p className="text-white text-left mx-4 py-12 text-5xl font-sans font-light tracking-wide">Aulas de <br></br>
            Hip Pop</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-start mx-0 py-0">
        <div className="w-full flex-grow relative">
          <Image
            src={bannerImgFour}
            alt="bannerImgFour"
            className="object-fill h-192 w-384 mx-0 py-0"
          />
          <div className="absolute inset-0 mx-10 flex items-end ">
            <p className="text-white text-left mx-4 py-12 text-5xl font-sans font-light tracking-wide">Aulas de <br></br>
            Guitarra</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default BannerBottom;