import React from "react";
import styled from "styled-components";


const ContainerTextoRomantico = styled.p`
  font-size: 1.2rem;
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  color: #fffaf0;
  font-style: italic;
  line-height: 1.8;
`;

const TextoRomantico = () => {
    return(
            <ContainerTextoRomantico>
                "Cada segundo ao seu lado é um lembrete de que o amor verdadeiro existe. 
                Não importa o tempo, os dias ou as distâncias — só você torna tudo mais bonito."
            </ContainerTextoRomantico>
    );
}

export default TextoRomantico;