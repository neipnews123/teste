import React from 'react'
import Head from 'next/head';


const Contactos = () => {
  return (
 
<div className="container mx-auto px-4">
    <Head>
      <title>Contactos Casa das Artes</title>
      <link rel="stylesheet" href="/styles/styles.css" />
    </Head>
    <main>
      <section className="py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Entre em Contacto Connosco!</h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded py-2 px-4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  </div>

  )
}

export default Contactos
