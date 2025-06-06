// componentes/Contador.jsx
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Container = styled.div`
  text-align: center;
  margin: 60px 0;
  color: #fff;
`;

const Titulo = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #fff5ee;
`;

const Titulo2 = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 100;
  color: #fff5ee;
`;

const Relogio = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const Unidade = styled.div`
  background-color: #a97463;
  color: #fff;
  border-radius: 15px;
  padding: 15px 25px;
  min-width: 90px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  font-family: 'Arial', sans-serif;
`;

const Numero = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Label = styled.div`
  font-size: 0.85rem;
  margin-top: 5px;
`;

function Contador() {
  const [tempo, setTempo] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const dataInicio = new Date('2021-01-29T00:00:00');

    const atualizarTempo = () => {
      const agora = new Date();
      let anos = agora.getFullYear() - dataInicio.getFullYear();
      let meses = agora.getMonth() - dataInicio.getMonth();
      let dias = agora.getDate() - dataInicio.getDate();

      if (dias < 0) {
        meses--;
        dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
      }
      if (meses < 0) {
        anos--;
        meses += 12;
      }

      const hoje = new Date();
      const tempoPassado = hoje.getTime() - dataInicio.getTime();
      const totalSegundos = Math.floor(tempoPassado / 1000);

      const horas = Math.floor((totalSegundos % 86400) / 3600);
      const minutos = Math.floor((totalSegundos % 3600) / 60);
      const segundos = totalSegundos % 60;

      setTempo({ anos, meses, dias, horas, minutos, segundos });
    };

    atualizarTempo();
    const timer = setInterval(atualizarTempo, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Titulo>29.01.2021</Titulo>
      <Titulo2>Compartilhando momentos há</Titulo2>

      <Relogio>
        <Unidade>
          <Numero>{tempo.anos}</Numero>
          <Label>ANOS</Label>
        </Unidade>
        <Unidade>
          <Numero>{tempo.meses}</Numero>
          <Label>MESES</Label>
        </Unidade>
        <Unidade>
          <Numero>{tempo.dias}</Numero>
          <Label>DIAS</Label>
        </Unidade>
        <Unidade>
          <Numero>{tempo.horas.toString().padStart(2, '0')}</Numero>
          <Label>HORAS</Label>
        </Unidade>
        <Unidade>
          <Numero>{tempo.minutos.toString().padStart(2, '0')}</Numero>
          <Label>MINUTOS</Label>
        </Unidade>
        <Unidade>
          <Numero>{tempo.segundos.toString().padStart(2, '0')}</Numero>
          <Label>SEGUNDOS</Label>
        </Unidade>
      </Relogio>
    </Container>
  );
}

export default Contador;
