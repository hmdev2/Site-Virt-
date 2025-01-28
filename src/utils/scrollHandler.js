import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    // Quando a página carregar, faz o scroll para o topo
    window.scrollTo(0, 0);

    // Lida com a mudança de hash (navegação por âncoras)
    const handleHashChange = () => {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Lida com o click em links com hrefs que começam com '#'
    const handleNavLinkClick = (event) => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));

      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });

        // Remove o hash da URL sem recarregar a página
        if (window.history.replaceState) {
          window.history.replaceState(null, null, window.location.pathname);
        }
      }
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Cleanup para remover os event listeners quando o componente for desmontado
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []); // O array vazio [] garante que isso rode apenas uma vez, quando o componente montar.

  return null;
}
