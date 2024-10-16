import React, { useState, useRef } from 'react';
import axios from "axios";
import { useQuery } from "react-query";


const CharList = ({ selectedPath, selectedElem, selectedStar }) => {

  const fetchCharList = async () => {
      try {
          const { data } = await axios.get("https://starrail-service.vercel.app/api/v1/characters");
          return data;
      } catch (error) {
          console.log(error);
      }
  }

  const { data: dataChars, isLoading } = useQuery(["chars"], fetchCharList, { retry: 5 });

  let filteredCards;
  if ((selectedPath.length === 0) && (selectedElem.length === 0) && (selectedStar.length === 0)) {
    filteredCards = dataChars;
  } 
  else {
    filteredCards = dataChars?.filter((card) => {
      const pathMatch = selectedPath.length === 0 || selectedPath.includes(card.pathName ?? "");
      const elemMatch = selectedElem.length === 0 || selectedElem.includes(card.combatType ?? "");
      const starMatch = selectedStar.length === 0 || selectedStar.includes(card.stars ?? "");
      

      // Adicione logs para depuração
      console.log(`Verificando card ${card.nameEnglish}: pathMatch = ${pathMatch}, elemMatch = ${elemMatch}, Star = ${starMatch}`);

      return pathMatch && elemMatch && starMatch; // Retorna verdadeiro se ambos os matches forem verdadeiros
    });
  }



  return !isLoading ? (
    <div className="
      flex justify-center items-center min-h-96 text-white
      md:w-full md:h-auto
    ">
      <div className="
        w-full min-h-96 flex flex-wrap justify-center
        md:w-full md:flex
      ">
      {filteredCards?.map((char, index) => (
        <div
        key={index}
        className={`
          w-24 h-32 m-1 relative flex-shrink-0 rounded-md border-2 
          ${char.stars == 4 ? "border-purple-500" : "border-yellow-500"}
          md:w-48 md:h-52
        `}
        >
          <span className='w-6 h-6 absolute md:w-8 md:h-8 md:bg-black/10 md:rounded-xl'>
            <img src={char.combatTypeIcon} alt="" />
          </span>
          <span className='w-6 h-6 absolute md:w-8 md:h-8 md:bg-white/5 md:rounded-xl right-0'>
            <img src={char.pathIcon} alt="" />
          </span>
          <img src={char.charIcon} alt={char.nameEnglish} className={`w-full h-full object-cover bg-gradient-to-t ${char.stars == 4 ? "from-purple-500" : "from-yellow-500"}`} />
          
          {/* Elemento com nome do personagem */}
          <span 
            className='
              w-full h-auto absolute bottom-0 flex justify-center text-sm bg-black opacity-50
              md:h-8 md:text-2xl
            '>
              <span className='invisible'> . </span>
          </span>
          <span 
            className='
              w-full h-auto absolute z-10 bottom-0 flex justify-center text-sm text-white font-semibold font-sans bg-transparent opacity-100
              md:h-8 md:text-2xl md:bottom-0
            '>
              <span className='text-white opacity-100'>{char.nameEnglish}</span>
          </span>
        </div>
      ))}
      </div>
    </div>
  ) : (
      <div>Carregando...</div>
  )
}

export default CharList;
