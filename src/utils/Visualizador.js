import { useEffect } from "react";

function preCarregarImagens(miniaturas) {
  miniaturas.forEach((miniatura) => {
    const img = new Image();
    img.src = miniatura.getAttribute("data-src");
  });
}

export default function Visualizador() {
  useEffect(() => {
    const miniaturas = document.querySelectorAll(".abreVisualizador");
    preCarregarImagens(miniaturas);

    const body = document.querySelector("body");

    // Função para criar visualizador ao clicar
    const handleClick = (event) => {
      const miniatura = event.currentTarget;
      const visualizador = document.createElement("div");
      visualizador.classList.add("visualizador");

      const imagem = document.createElement("img");
      let dataIndex = Number(miniatura.getAttribute("data-index"));
      imagem.src = miniaturas[dataIndex].getAttribute("data-src");

      if (/Mobi|Android/i.test(navigator.userAgent)) {
        imagem.classList.remove("fade-out");
      }

      visualizador.appendChild(imagem);

      const botaoX = document.createElement("span");
      botaoX.classList.add("botaoX");
      botaoX.textContent = "X";
      botaoX.addEventListener("click", () => {
        visualizador.remove();
      });

      visualizador.appendChild(botaoX);

      const mudaImagem = () => {
        imagem.classList.add("fade-out");
        setTimeout(() => {
          imagem.src = miniaturas[dataIndex].getAttribute("data-src");
          imagem.classList.remove("fade-out");
        }, 500);
      };

      const anterior = document.createElement("button");
      anterior.textContent = "<";
      anterior.classList.add("anterior");
      anterior.addEventListener("click", () => {
        if (dataIndex > 0) {
          dataIndex--;
        } else {
          dataIndex = miniaturas.length - 1;
        }
        mudaImagem();
      });

      visualizador.appendChild(anterior);

      const proximo = document.createElement("button");
      proximo.textContent = ">";
      proximo.classList.add("proximo");
      proximo.addEventListener("click", () => {
        if (dataIndex < miniaturas.length - 1) {
          dataIndex++;
        } else {
          dataIndex = 0;
        }
        mudaImagem();
      });

      visualizador.appendChild(proximo);

      body.appendChild(visualizador);
    };

    // Adiciona o evento de clique para cada miniatura
    miniaturas.forEach((miniatura) => {
      miniatura.addEventListener("click", handleClick);
    });

    // Cleanup para remover event listeners ao desmontar o componente
    return () => {
      miniaturas.forEach((miniatura) => {
        miniatura.removeEventListener("click", handleClick);
      });
    };
  }, []); // Executa apenas uma vez ao montar o componente

  return null; // Este componente só manipula o DOM, sem renderizar elementos diretamente
}
