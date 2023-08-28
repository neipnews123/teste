import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Posts from "../components/Posts";

import Image from "next/image";

import bannerImgOne from "../public/images/img_posts/teatro_infantil.jpg";
import bannerImgTwo from "../public/images/img_posts/dia_crianca.jpg";
import bannerImgThree from "../public/images/img_posts/aulas_guitarra.jpeg";
import bannerImgFour from "../public/imgs/4_guitarra.png";


export default function Home() {

 
  return (
    <div>
      <Head>
        <title>Casa das Artes Ao | Website</title>
        <link rel="icon" href="#" />
      </Head>

      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
       
        <Header />
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        <Banner />

        <div className="justify-start w-full h-full mx-0  py-0 gap-0 md:gap-0 flex">
        <div className="w-full h-full flex-grow mx-0 py-0">
        <BannerBottom />
        </div>
        </div>
       
      
        {/* ============ Banner End here ============== */}
   
      

        
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
 
        
       
        <div className="max-w-7xl mx-auto py-4 h-19 relative">
        
        </div>
        <h1 className="text-center max-w-7xl text-3xl text-red-500 mx-auto h-20 relative">Posts</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
 
        <div className=" border-opacity-40 group">
        <div className="h-full w-full overflow-hidden">
          <Image
            width={380}
            height={350}
            src={bannerImgOne}
            alt="postagem dos eventos..."
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
          />
          </div>
          </div>
          <div className=" border-opacity-40 group">
          <div className="h-full w-full overflow-hidden">
          <Image
            width={480}
            height={450}
            src={bannerImgTwo}
            alt="postagem dos eventos..."
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className=" border-opacity-40 group">
          <div className="h-full w-full overflow-hidden">
          <Image
            width={480}
            height={450}
            src={bannerImgThree}
            alt="postagem dos eventos..."
            className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
          />
        </div>
      </div>

        </div>

       <div>
     
    </div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}