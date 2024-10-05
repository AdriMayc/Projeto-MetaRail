import React, { useState, useRef } from 'react';
import '../../../index.css';
import {copyIcon} from "../../../../public"


const cards = [
  { id: 1, title: "A1B2C3D4", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 2, title: "E5F6G7H8", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 3, title: "I9J1K0L1", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 4, title: "1M12N1O3", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 5, title: "1P4Q1R5S", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 6, title: "1P1O1T1W", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 7, title: "A1B2C3D4", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 8, title: "E5F6G7H8", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 9, title: "I9J1K0L1", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 10, title: "1M12N1O3", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 12, title: "1P4Q1R5S", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
];

function App() {

  const copyToClipboard = (text) => {
    // Verifica se a API de Clipboard está disponível
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => {
          
        })
        .catch(err => {
          console.error("Erro ao copiar texto: ", err);
        });
    } else {
      // Fallback para navegadores que não suportam a API de Clipboard
      // Cria um elemento textarea
      const textarea = document.createElement("textarea");
      textarea.value = text; // Define o valor como o texto que queremos copiar
      textarea.style.position = "fixed"; // Previne que o textarea apareça visivelmente na tela
      textarea.style.opacity = 0; // Garante que o elemento não seja visível

      document.body.appendChild(textarea); // Adiciona o textarea temporariamente ao DOM
      textarea.focus(); // Garante que o textarea receba foco
      textarea.select(); // Seleciona o conteúdo do textarea

      try {
        // Usa o comando 'copy' para copiar o texto selecionado
        const successful = document.execCommand('copy');
        if (successful) {
          
        } else {
          alert("Não foi possível copiar o texto.");
        }
      } catch (err) {
        console.error("Erro ao copiar texto: ", err);
      }

      // Remove o textarea temporário
      document.body.removeChild(textarea);
    }
  };

  return (
    <div className="
      w-full min-h-20 px-2 pt-4 pb-1 bg-[#111213] font-sans
      md:flex md:justify-center
    ">
      <div
        className="
          w-full h-auto py-1 px-0 rounded-xl flex flex-wrap justify-around items-center shrink-0 bg-[#111213] border border-[#26292B]
          md:w-4/6
      ">
        <div className='w-5/6 h-auto flex justify-center items-center font-bold text-white md:text-xl'>
          Códigos
        </div>
        <hr className='w-10/12 py-0.5 opacity-70'/>
        <div className='
          w-5/6 h-auto mt-0.5 mb-3 flex flex-wrap
          
        '> 
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-1/3 h-4 flex items-center py-2.5  ${
                index % 3 === 1 ? 'border-x border-white' : ''}
                md:py-5
                `}
            >
                <h2 className="
                  w-3/4 h-4 ml-2 flex items-center text-sm text-[#f5f5f5] opacity-70 border-b border-white
                  md:text-xl
                ">
                  {card.title}
                </h2>
                <img 
                  className='w-1/4 h-4 flex cursor-pointer hover:opacity-50 md:h-8' 
                  src={copyIcon} 
                  alt="Copiar Título" 
                  onClick={() => copyToClipboard(card.title)}
                  onTouchStart={() => copyToClipboard(card.title)}
                  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
