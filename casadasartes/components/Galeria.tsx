import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';




import galeria_1 from '../public/images/img_galeria/galeria_1.jpeg'
import galeria_2 from '../public/images/img_galeria/galeria_2.jpeg'
import galeria_3 from '../public/images/img_galeria/galeria_3.jpeg'
import galeria_4 from '../public/images/img_galeria/galeria_4.jpeg'
import galeria_5 from '../public/images/img_galeria/galeria_5.jpeg'
import galeria_6 from '../public/images/img_galeria/galeria_6.jpeg'
import galeria_7 from '../public/images/img_galeria/galeria_7.jpeg'

import galeria_9 from '../public/images/img_galeria/galeria_9.jpeg'
import galeria_10 from '../public/images/img_galeria/galeria_10.jpeg'
import galeria_11 from '../public/images/img_galeria/galeria_11.jpeg'
import galeria_12 from '../public/images/img_galeria/galeria_12.jpeg'
import galeria_13 from '../public/images/img_galeria/galeria_13.jpeg'
import galeria_14 from '../public/images/img_galeria/galeria_14.jpeg'
import galeria_15 from '../public/images/img_galeria/galeria_15.jpeg'


 const Galeria = () =>  {

  let data = [
    {
      id: 1,
      imgSrc: galeria_1,
    },
    {
      id: 2,
      imgSrc: galeria_2,
    },

    {
      id: 3,
      imgSrc: galeria_3,
    },

    {
      id: 4,
      imgSrc: galeria_4,
    },

    {
      id: 5,
      imgSrc: galeria_5,
    },

    {
      id: 6,
      imgSrc: galeria_6,
    },

    {
      id: 7,
      imgSrc: galeria_7,
    },
    {
      id: 9,
      imgSrc: galeria_9,
    },
    {
      id: 10,
      imgSrc: galeria_10,
    },
    {
      id: 11,
      imgSrc: galeria_11,
    },
    {
      id: 12,
      imgSrc: galeria_12,
    },
    {
      id: 13,
      imgSrc: galeria_13,
    },
    {
      id: 14,
      imgSrc: galeria_14,
    },
    {
      id: 15,
      imgSrc: galeria_15,
    },
  ]

  const [model, setModel] = useState(false)
  const [temimgSrc, setTempimgSrc] = useState('');

  const getImg = (imgSrc: any) => {
    setTempimgSrc(imgSrc)
    setModel(true);
  }  

  return (
    
    <>
      <Head>
        <link rel="stylesheet" href="../styles/global.css" />
      </Head>
      <div className="max-w-7xl mx-auto py-4 h-19 relative">
      <h1 style={{textAlign: 'center'}} > Galeria Casa das Artes</h1>
        </div>

    <div className={model? "model open" : "model"}>
      <Image src={temimgSrc} alt="Imagem da Galeria" />

     {/**  <CloseIcon onClick={() => setModel(false)} />  */}

    </div>
    <div className='galeria mx-2 py-2 gap-2'>
    
      {data.map((item, index) => {
        return (
          <div className='pics mx-0 py-0 gap-0' key={index} onClick={() => getImg(item.imgSrc)}>
            <Image src={item.imgSrc} alt="Imagem da Galeria" style={{width: '100%'}} />
          </div>
        )
      })}
    </div>
    </>

  );

 };


export default Galeria;