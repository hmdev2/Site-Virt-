import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Virtu from './templates/Virtu';
import { BrowserRouter } from 'react-router-dom';  // Importe o BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolva o App com o BrowserRouter */}
      <Virtu />
    </BrowserRouter>
  </React.StrictMode>
);
