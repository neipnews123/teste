import React from 'react'
import Head from "next/head"
import Formacao from '../components/Formacao';
import Header from "../components/Header";
import Footer from "../components/Footer";

const formacoes = () => {
  return (
    <>
    <Head>
      <title>Formacões Casa das Artes</title>
    </Head>
    <Header />
    <Formacao />
    <Footer />
  </>
  )
}

export default formacoes