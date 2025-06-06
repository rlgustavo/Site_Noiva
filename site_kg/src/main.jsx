import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Pedido from './componentes/Pedido';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const tema = {
  cores: {
    fundo: '#6b4c3b',
    texto: '#ffffff',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Pedido />} />     {/* Página de pedido */}
          <Route path="/home" element={<App />} />    {/* Página principal */}
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
