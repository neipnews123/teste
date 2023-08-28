import React from 'react'
import Head from "next/head"

import Agenda from '../components/Agenda';
import Header from "../components/Header";
import Footer from "../components/Footer";

const agenda = () => {
  return (
    <>
    <Head>
      <title>Agenda Casa das Artes</title>
    </Head>
    <Header />
    <Agenda />
    <Footer />
  </>
  )
}

export default agenda