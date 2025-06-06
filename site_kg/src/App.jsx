import React from 'react'
import Cabecalho from './componentes/Cabecalho';
import Carrousel from './componentes/Carrousel';
import Contador from './componentes/Contador';
import TextoRomantico from './componentes/TextoRomantico';
import SpotifyPlayer from './componentes/SpotifyPlayer';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <>
      <SpotifyPlayer />
      <Cabecalho />
      <Carrousel />
      <Contador />
      <TextoRomantico />
      <Rodape />

    </>
  );
}

export default App;

