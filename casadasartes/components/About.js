import React from 'react'
import Head from 'next/head';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto px-4">
    <Head>
      <title>About Section</title>
      <link rel="stylesheet" href="/styles/styles.css" />
    </Head>
    <main>
      <section className="py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
          <p className="text-lg mb-8">
          A Casa das Artes é um espaço cultural multidisciplinar, harmonioso, cheio de requinte e repleto de nostalgia.
          </p>
          
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/CasaDasArtesLuanda"
              className="text-red-700 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/casadasartes.angola/"
              className="text-red-700 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@casadasartes.angola"
              className="text-red-700 hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default About