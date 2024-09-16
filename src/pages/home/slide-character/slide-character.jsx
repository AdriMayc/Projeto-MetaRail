import React, { useState, useRef } from 'react';
import bailuCard from '../../../../public/char/bailuCard.png' //Abundancia
import boothillCard from '../../../../public/char/boothillCard.png' // Caça
import bladeCard from '../../../../public/char/bladeCard.png' // Destruição
import argentiCard from '../../../../public/char/argentiCard.png' // Erudição
import bronyaCard from '../../../../public/char/bronyaCard.png' // Harmonia
import acheronCard from '../../../../public/char/acheronCard.png' //Inexistencia
import aventurineCard from '../../../../public/char/aventurineCard.png' // Preservação

const cards = [
  { id:1, title: "Bailu", image: bailuCard },
  { id:2, title: "Boothill", image: boothillCard },
  { id:3, title: "Blade", image: bladeCard },
  { id:4, title: "Argenti", image: argentiCard },
  { id:5, title: "Bronya", image: bronyaCard },
  { id:6, title: "Acheron", image: acheronCard },
  { id:7, title: "Aventurine", image: aventurineCard },
];


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const cardsToShowMobile = 1;
  const cardsToShowDesktop = 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1.5 : cards.length - cardsToShowDesktop));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < cards.length - cardsToShowDesktop ? prevIndex + 1.5 : 0));
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    sliderRef.current.setAttribute('data-touch-start', touchStartX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = Number.parseFloat(sliderRef.current.getAttribute('data-touch-start'));

    if (touchStartX - touchEndX > 50) {
      handleNextClick();
    } else if (touchStartX - touchEndX < -50) {
      handlePrevClick();
    }
  };

  return (
    <div className="
      flex justify-center items-center h-52 text-white over
      md:h-72

    ">
      <div className="relative w-full h-full max-w-5xl overflow-x-hidden px-6">
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="
            w-full h-full flex transition-transform duration-500 
            
          "
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShowDesktop)}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="
                w-1/2 h-full flex-shrink-0 flex justify-center items-center p-2
                md:w-1/4
              "
            >
              <div className="
                w-full h-full p-0 shadow-md rounded-lg overflow-hidden bg-[#2C252B] from-30% 
                md:mx-4 md:w-full md:h-full
              ">
                <img src={card.image} alt={card.title} className="w-full h-1/2 object-cover bg-transparent" />
                {/* Stats */}
                <div className="p-1">
                    <div id="info-perso" 
                    className="
                      w-full h-full flex flex-col items-center
                      md:w-full md:h-20 
                      ">
                        <span 
                          className='
                            w-full h-1/3 text-md font-semibold font-sans flex justify-center items-center
                            md:h-1/2 md:text-2xl
                          '>
                            Acheron
                        </span>
                        <div 
                          id="stats" 
                          className="
                            w-3/4 h-2/3 flex flex-col justify-evenly
                            md:w-full md:h-full
                          ">
                            {/* Stats LIFE e ATK */}
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
                                    <span className='text-xs md:text-2xl'> 0000 </span>
                                </div>
                                <div 
                                  id='atack' 
                                  className='
                                    w-1/2 h-full mx-0.5 bg-[#413F54] flex justify-around items-center rounded-sm
                                    
                                    '>
                                    <img  className="w-3 h-3 md:w-5 md:h-5" src="../../../../public/attak.png" alt="" /> 
                                    <span className='text-xs md:text-2xl'> 0000 </span>
                                </div>
                            </div>
                            {/* Stats DEF e AGI */}
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
                                    <span className='text-xs md:text-2xl'> 0000 </span>
                                </div>
                                <div 
                                  id='speed' 
                                  className='
                                    w-1/2 h-full mx-0.5 bg-[#413F54] flex justify-around items-center rounded-sm
                                    
                                    '>
                                    <img className="w-3 h-3 md:w-5 md:h-5" src="../../../../public/speed.png" alt="" /> 
                                    <span className='text-xs md:text-2xl'> 0000 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navegação de setas para Desktop */}
        <button
          className="w-7 h-full px-1 sm:block absolute left-0 top-1/2 transform -translate-y-1/2 rounded-md
            md:w-10 md:h-12  md:px-1.5 md:rounded-lg bg-[#413f54]"
          onClick={handlePrevClick}
        >
          {/* &#10094; */}
          {/* <img src={arrowLeft} alt="" /> */}
          <div class="w-0 h-0
            border-t-[1.2rem] border-t-transparent
            border-r-[1rem] border-r-[#2C252B]
            border-b-[1.2rem] border-b-transparent
            md:border-t-[1rem] md:border-t-transparent
            md:border-r-[1.5rem] md:border-r-[#2C252B]
            md:border-b-[1rem] md:border-b-transparent
            ">
          </div>

        </button>
        <button
          className="w-8 h-full px-2 sm:block absolute right-0 top-1/2 transform -translate-y-1/2 rounded-md focus:outline-none
            md:w-10 md:h-12 md:px-2.5 md:rounded-lg bg-[#413f54]"
          onClick={handleNextClick}
        >
          {/* &#10095; */}
          {/* <img src={arrowRight} alt="" /> */}
          <div class="w-0 h-0
            border-t-[1.2rem] border-t-transparent
            border-l-[1rem] border-l-[#2C252B]
            border-b-[1.2rem] border-b-transparent
            md:border-t-[1rem] md:border-t-transparent
            md:border-l-[1.5rem] md:border-l-[#2C252B]
            md:border-b-[1rem] md:border-b-transparent
            ">
          </div>
          
        </button>
      </div>
    </div>
  );
}

export default App;
