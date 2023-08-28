import React from "react";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Formacao = () => {
  const formationImages = [
    {
      src: "/imgs/4_guitarra.png",
      title: "Aulas de Guitarra",
    },
    {
      src: "/imgs/7_piano.png",
      title: "Aulas de Piano",
    },
    {
      src: "imgs/2_teatro.png",
      title: "Aulas de Teatro",
    },
    {
      src: "/imgs/3_hipohop.png",
      title: "Aulas de Hip-Hop",
    },
    {
      src: "/imgs/1_conteporanea.png",
      title: "Aulas de Contemporanêa",
    },
    {
      src: "/imgs/5_ballet_kis.png",
      title: "Ballet Kids",
    },
    {
      src: "/imgs/9_ioga.png",
      title: "Yoga",
    },
    {
      src: "/imgs/8_capoeira.png",
      title: "Capoera",
    },
    {
      src: "/imgs/6_ballet_cl.png",
      title: "Ballet",
    },
    // Add more image objects here...
  ];

  const formationVideos = [
    {
      src: "https://www.youtube.com/watch?v=Ra6L2pFjs4w",
      title: "Ballet Clássico",
    },
    {
      src: "https://youtu.be/Ra6L2pFjs4w",
      title: "Teatro",
    },
    {
      src: "https://www.youtube.com/watch?v=FR9MTI_v2nU",
      title: "Piano",
    },
    // Add more video objects here...
  ];

  return (
    <section className="py-12">
      <h1 className="text-4xl  mb-8 text-center">AULAS NA CASA DAS ARTES!!</h1>
      <div className="flex flex-wrap mb-8">
        {formationImages.map((image, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-6/8 px-1 mb-1"
          >
            <div className="relative">
              <img
                className="w-full h-auto"
                src={image.src}
                alt={image.title}
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                  {image.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap mb-8">
        {formationVideos.map((video, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-8/16 px-4 mb-4"
          >
            <div className="relative">
              <div className="w-full">
                <iframe
                  className="w-full h-64 md:h-72 lg:h-96"
                  src={video.src}
                  title={video.title}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                  {video.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div className="mt-6 py-30 flex justify-between">
      <div className="max-w-lg bg-blue-100 p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Requisitos para a Inscrição:</h2>
        <h3 className="text-2xl mb-1">2 Fotos - Tipo Passe</h3>
        <h3 className="text-2xl mb-1">Cópia de Documento de Identidade</h3>
        <h3 className="text-2xl mb-4">Ficha de Inscrição Devidamente Preenchida</h3>
        <h3 className="text-2xl mb-1">Valor da Inscrição - AOA 10.000,00</h3>
        <h3 className="text-2xl mb-1">Confirmação da Matrícula - AOA 5.000,00</h3>
        <h6 className="text-2xl text-red-500 mb-4">
          OBS: Não aceitamos Devolução/Reembolso/Processo Incompleto para Inscrição
        </h6>
        <h3 className="text-2xl mb-4">Para mais informações:</h3>
        <h3 className="flex items-center text-2xl mb-1">
          <AiFillPhone className="w-6 h-6 text-red-600 hover:text-white duration-300 cursor-pointer" />
          <span className="ml-2">996-660-065 | 922-241-760</span>
        </h3>
        <h3 className="flex items-center text-2xl mb-1">
          <AiOutlineMail className="w-6 h-6 text-red-600 hover:text-white duration-300 cursor-pointer" />
          <span className="ml-2">secretaria@casadasartesluanda.com</span>
        </h3>
      </div>

      <div className="max-w-lg bg-blue-100 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Valor Mensal das Actividades:</h2>
        <h3 className="text-2xl mb-4">Uma Aula Semanal</h3>
        <h3 className="text-2xl mb-1"> Piano - AOA 25.000,00</h3>
        <h3 className="text-2xl mb-1"> Outras - AOA 20.000,00</h3>

      </div>
    </div>
    </section>
  );
};

export default Formacao;
