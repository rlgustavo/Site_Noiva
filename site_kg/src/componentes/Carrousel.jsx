import React from "react";
import styled from "styled-components";

import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import foto5 from "../assets/foto5.jpg";
import foto6 from "../assets/foto6.jpg";
import foto7 from "../assets/foto7.jpg";

const CarouselContainer = styled.section`
  margin-top: 30px;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE e Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Opera */
  }
`;


const Foto = styled.img`
  height: 300px;
  width: auto;
  border-radius: 16px;
  margin: 0 10px;
  display: inline-block;
  object-fit: cover;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const imagens = [foto1, foto2, foto3, foto4, foto5, foto6, foto7];

const Carrousel = () => {
    return (
        <>
            <CarouselContainer>
                    {imagens.map((src, index) => (
                        <Foto key={index} src={src} alt={`Foto ${index + 1}`} />
                    ))}

            </CarouselContainer>
        </>
    )
}

export default Carrousel;