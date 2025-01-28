import React from 'react';
import { EscritorioSection } from '../../components/EscritotioComponents/EscritorioSection';
import { InicioSection } from '../../components/InicioComponents/InicioSection';
import { ProjetoSection } from '../../components/ProjetosComponents/ProjetosSection';
import { QuemSomosSection } from '../../components/QuemSomosComponents/QuemSomosSection';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Visualizador from '../../utils/Visualizador';
import ScrollHandler from '../../utils/scrollHandler';
import { Footer } from '../../components/FooterComponents/Footer';


export default function App() {

  // useEffect(() => {
  //   Visualizador();
  // }, []); 

  return (
    <main>
      <ScrollHandler />
      <InicioSection />
      <div className="divisor"></div>
      <QuemSomosSection />
      <EscritorioSection />
      <ProjetoSection />
      <Footer />
      <Visualizador />
    </main>
  );
}
