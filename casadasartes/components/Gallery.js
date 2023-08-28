import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const images = [
    "/images/img_galeria/galeria_1.jpeg",
    "/images/img_galeria/galeria_2.jpeg",
    "/images/img_galeria/galeria_3.jpeg",
    "/images/img_galeria/galeria_4.jpeg",
    "/images/img_galeria/galeria_5.jpeg",
    "/images/img_galeria/galeria_6.jpeg",
    "/images/img_galeria/galeria_7.jpeg",
    "/images/img_galeria/galeria_9.jpeg",
    "/images/img_galeria/galeria_10.jpeg",
    "/images/img_galeria/galeria_11.jpeg",
    "/images/img_galeria/galeria_12.jpeg",
    "/images/img_galeria/galeria_13.jpeg",
    "/images/img_galeria/galeria_14.jpeg",
    "/images/img_galeria/galeria_15.jpeg",
    "/images/img_galeria/galeria_4.jpeg",
    "/images/img_galeria/galeria_2.jpeg",
    "/images/img_galeria/galeria_6.jpeg",
    "/images/img_galeria/galeria_7.jpeg",
  ];

  const imgAction = (action) => {
     let i = data.i;
     if(action === 'next-img') {
           setData({img: images[i + 1], i: i + 1});
     }
     if(action === 'previous-img') {
      setData({img: images[i - 1], i: i - 1});
}
if(!action){
  setData({img: '', i: 0});
}
  }

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        > 
<button style={{position: "absolute", top: "10px", right: "10px", color: "white"}} onClick={() => imgAction()}>X</button>

<button style={{ color: "white"}} onClick={() => imgAction('previous-img')}>Anterior</button>
<img src={data.img} style={{width: "auto", maxWidth: "90%", maxHeight: "90%"}} />
<button style={{ color: "white"}} onClick={() => imgAction('next-img')}>Próximo</button>
          
        </div>
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
