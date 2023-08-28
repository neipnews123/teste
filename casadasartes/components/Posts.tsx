import React from "react";
import Image from "next/image";

import bannerImgOne from "../public/imgs/1_conteporanea.png";
import bannerImgTwo from "../public/imgs/2_teatro.png";
import bannerImgThree from "../public/imgs/3_hipohop.png";
import bannerImgFour from "../public/imgs/4_guitarra.png";

const Posts = () => {
  return (
      <div className=" border-opacity-40 group">
        <div className="h-3/5 w-full overflow-hidden">
          <Image
            width={380}
            height={350}
            src={bannerImgOne}
            alt="postagem dos eventos..."
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
          />
          </div>
          <div className="h-3/5 w-full overflow-hidden">
          <Image
            width={380}
            height={350}
            src={bannerImgTwo}
            alt="postagem dos eventos..."
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
          />
        </div>
      </div>

  );
};

export default Posts;
