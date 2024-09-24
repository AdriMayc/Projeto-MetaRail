import React, { useState, useRef } from 'react';
import axios from "axios";
import { useQuery } from "react-query";


const CharList = () => {
  const fetchCharList = async () => {
      try {
          const { data } = await axios.get("https://starrail-service.vercel.app/api/v1/characters");
          return data;
      } catch (error) {
          console.log(error);
      }
  }

  const { data: dataChars, isLoading } = useQuery(["chars"], fetchCharList, { retry: 5 });

  return !isLoading ? (
    <div className="flex justify-center items-center min-h-96 text-white
    md:h-auto md:w-full
    ">
      <div className="w-full min-h-96 flex flex-wrap justify-center">
      {dataChars?.map((char, index) => (
        <div
        key={index}
        className={`
          w-24 h-32 m-1 relative flex-shrink-0 rounded-md border-2 ${char.stars == 4 ? "border-purple-500" : "border-yellow-500"}
          md:w-full
        `}
        >
          <span className='w-6 h-6 absolute'>
            <img src={char.combatTypeIcon} alt="" />
          </span>
          <img src={char.charIcon} alt={char.nameEnglish} className={`w-full h-full object-cover bg-gradient-to-t ${char.stars == 4 ? "from-purple-500" : "from-yellow-500"}`} />
          
          {/* Elemento com nome do personagem */}
          <span 
            className='
              w-full h-auto absolute bottom-0 flex justify-center text-sm bg-black opacity-50
              md:h-1/2 md:text-2xl
            '>
              <span className='invisible'> . </span>
          </span>
          <span 
            className='
              w-full h-auto absolute bottom-0 flex justify-center text-sm text-white font-semibold font-sans bg-transparent opacity-100
              md:h-1/2 md:text-2xl
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


{/* <div 
    id="stats" 
    className="
      w-3/4 h-2/3 flex flex-col justify-evenly
      md:w-full md:h-full
    ">
      
      <div className='
        w-full h-8 py-1 px-0.5 bg-[#30292f] rounded-sm flex
        md:h-12  md:mb-1
      '>
          <div 
            id='life' 
            className='
              w-1/2 h-full mx-0.5 bg-[#413F54] flex justify-around items-center rounded-sm
              
              '>
              <img  className="w-3 h-3 md:w-5 md:h-5" src="../../../../public/life.png" alt="" /> 
              <span className='text-xs md:text-2xl'> {nvlMaxClicked ? card.nvl1 : card.nvl80} </span>
          </div>
          <div 
            id='atack' 
            className='
              w-1/2 h-full mx-0.5 bg-[#413F54] flex justify-around items-center rounded-sm
              
              '>
              <img  className="w-3 h-3 md:w-5 md:h-5" src="../../../../public/attak.png" alt="" /> 
              <span className='text-xs md:text-2xl'> {nvlMaxClicked ? card.nvl1 : card.nvl80} </span>
          </div>
      </div>
      
      <div className='
        w-full h-8 py-1 px-0.5 bg-[#30292f] rounded-sm flex
        md:h-12 md:mt-1
      '>
          <div 
            id='shield' 
            className='
              w-1/2 h-full mx-0.5 bg-[#413F54] flex justify-around items-center rounded-sm
              
              '>
              <img className="w-3 h-3 md:w-5 md:h-5" src="../../../../public/shield.png" alt="" /> 
              <span className='text-xs md:text-2xl'> {nvlMaxClicked ? card.nvl1 : card.nvl80} </span>
          </div>
          <div 
            id='speed' 
            className='
              w-1/2 h-full mx-0.5 bg-[#413F54] flex justify-around items-center rounded-sm
              
              '>
              <img className="w-3 h-3 md:w-5 md:h-5" src="../../../../public/speed.png" alt="" /> 
              <span className='text-xs md:text-2xl'> {nvlMaxClicked ? card.nvl1 : card.nvl80} </span>
          </div>
</div> */}

{/* 
  return (
  //   <div className="flex justify-center items-center min-h-96 text-white
  //                   md:h-auto md:w-full
  //   ">
  //     <div className="w-full min-h-96 flex flex-wrap justify-evenly">
  //         {cards.map((card) => (
  //           <div
  //             key={card.id}
  //             className="
  //               w-24 h-28 m-2 relative flex-shrink-0 rounded-md border-2 border-red-600
  //               md:w-full
  //             "
  //           >
  //               <img src={card.image} alt={card.title} className="w-full h-full object-cover bg-gradient-to-t from-purple-500" />
  
  //               <span 
  //                 className='
  //                   w-full h-auto absolute bottom-0 flex justify-center text-md font-semibold font-sans
  //                   md:h-1/2 md:text-2xl
  //                 '>
  //                   {card.title}
  //               </span>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  // );  
*/}