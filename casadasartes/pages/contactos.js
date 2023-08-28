import React from 'react'
import Head from "next/head"
import Contactos from '../components/Contactos';
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactos = () => {
  return (
    <>
    <Head>
      <title>Contactos Casa das Artes</title>
    </Head>
    <Header />
    <Contactos />
    <Footer />
  </>
  )
}

export default contactos