import React from 'react'
import Head from "next/head"
import About from '../components/About';
import Header from "../components/Header";
import Footer from "../components/Footer";

const about = () => {
  return (
    <>
    <Head>
      <title>Contactos Casa das Artes</title>
    </Head>
    <Header />
    <About />
    <Footer />
  </>
  )
}

export default about