import React from "react";
import styled from "styled-components";


export const Footer = styled.footer`
  background-color:  #6B3E26;/* tom de bege suave */
  padding: 20px 0px;
  padding-top: 120px;
  text-align: center;
  font-size: 0.7rem;
  color: #FCE8DC; /* marrom semelhante ao de cima */
  font-family: 'Quicksand', sans-serif;
  margin-top: 120px; /* espaço maior acima do footer */
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 15px 10px;
    margin-top: 40px;
  }
`;


const Rodape = () => {
  return (
    <Footer>
      © {new Date().getFullYear()} Todos os direitos reservados — Feito com ❤️ por Gustavo
    </Footer>
  );
};

export default Rodape;
