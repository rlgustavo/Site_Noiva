import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Pedido() {
  const navigate = useNavigate();
  const [posicao, setPosicao] = useState({ top: null, left: null });

  const isMobile = window.innerWidth <= 600;

  const aceitar = () => navigate('/home');

  const fugir = () => {
    const larguraMax = window.innerWidth - 120;
    const alturaMax = window.innerHeight - 160;

    const novaLeft = Math.random() * larguraMax;
    const novaTop = Math.random() * alturaMax + 120;

    setPosicao({ top: novaTop, left: novaLeft });
  };

  return (
    <Container>
      <Coracao src="https://emojicdn.elk.sh/❤️" alt="Coração" />
      <Botoes>
        <BotaoSim onClick={aceitar}>SIM</BotaoSim>
        <BotaoNao
          onClick={isMobile ? fugir : undefined}
          onMouseEnter={!isMobile ? fugir : undefined}
          style={{
            position: posicao.top === null ? 'relative' : 'absolute',
            top: posicao.top ?? 'auto',
            left: posicao.left ?? 'auto'
          }}
        >
          NÃO
        </BotaoNao>
      </Botoes>
    </Container>
  );
}

// Styled Components

const Pedidotext = styled.p`
  font-size: 1.2rem;
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
  color: black;
  font-style: italic;
  line-height: 1.8;
`;

const Container = styled.div`
  background-color: #ffeeee;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Coracao = styled.img`
  width: 150px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

const Botoes = styled.div`
  display: flex;
  gap: 20px;
  z-index: 2;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BotaoSim = styled.button`
  background-color: pink;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  z-index: 2;
`;

const BotaoNao = styled.button`
  background-color: hotpink;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  z-index: 2;
`;
