// import { Agency } from "@/sections"
import Head from "next/head"
import Galeria from "../components/Galeria";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Galleria = () => {
  return (
    <>
      <Head>
        <title>Galeria Casa das Artes</title>
      </Head>
      <Header />
      <Gallery />
   
    </>
  )
}

export default Galleria