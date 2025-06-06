import styled from 'styled-components';
import coracaoIcone from '../assets/coracao.jpg'; // você pode usar o ícone que quiser aqui

const Container = styled.header`
  text-align: center;
  margin-top: 80px;
`;

const Coracao = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  
`;

const Nomes = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 36px;
  color: ${({ theme }) => theme.cores.texto};
  font-weight: 100;
  letter-spacing: 2.4px;
  margin-top: 30px;
`;

const Data = styled.div`
  font-family: 'arial', cursive;
  font-size: 18px;
  color: ${({ theme }) => theme.cores.texto};
  margin-top: 30px;
`;

function Cabecalho() {
  return (
    <Container>
      <Coracao src={coracaoIcone} alt="Coração" />
      <Nomes>Keizy Souza Mendes</Nomes>
      <Data>Feliz dias dos Namorados <br /> 12/06/2025</Data>
    </Container>
  );
}

export default Cabecalho;
