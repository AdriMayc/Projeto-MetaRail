import React, { useState, useRef } from 'react';
import '../../../index.css';


const cards = [
  { id: 1, title: "A1B2C3D4", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 2, title: "E5F6G7H8", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 3, title: "I9J1K0L1", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 4, title: "1M12N1O3", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 5, title: "1P4Q1R5S", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
  { id: 6, title: "1T6U1V7W", image: "100L de Café + Moedor de grão", validade: '00/00/0000' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  
  var cardsToShowDesktop = 0

  if( window.innerWidth < 768){

    var cardsToShowDesktop = 1;

  }else{

    var cardsToShowDesktop = 3;
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : cards.length - cardsToShowDesktop));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < cards.length - cardsToShowDesktop ? prevIndex + 1 : 0));
  };

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    sliderRef.current.setAttribute('data-touch-start', touchStartX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = parseFloat(sliderRef.current.getAttribute('data-touch-start'));

    if (touchStartX - touchEndX > 50) {
      handleNextClick();
    } else if (touchStartX - touchEndX < -50) {
      handlePrevClick();
    }
  };

  return (
    <div className="flex justify-center items-center h-28 bg-[#2C252B] overflow-y-auto font-sans">
      <div className="relative w-full max-w-5xl overflow-hidden">
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShowDesktop)}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full md:w-1/3  flex-shrink-0 flex justify-center items-center p-4"
            >
              <div className="w-4/5 h-20 bg-[#413F54] shadow-md rounded-lg overflow-x-hidden">
                {/* Div com informações */}
                <div className="p-0 flex flex-col justify-between items-center">
                  <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                  <h2 className="text-sm font-semibold text-white">{card.image}</h2>
                  <h2 className="text-sm font-semibold text-white">{card.validade}</h2>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navegação de setas para Desktop */}
        <button
          className="md:block h-full absolute left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#2C252B] from-50% text-white p-2 rounded-md focus:outline-none"
          onClick={handlePrevClick}
        >
          {/* &#10094; */}
          {/* <img src={arrowLeft} alt="" /> */}
          <div class="w-0 h-0 
            border-t-[1rem] border-t-transparent
            border-r-[1.5rem] border-r-[#413F54]
            border-b-[1rem] border-b-transparent">
          </div>
        </button>
        <button
          className="md:block h-full absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-[#2C252B] from-50% text-white p-2 rounded-md focus:outline-none"
          onClick={handleNextClick}
        >
          {/* &#10095; */}
          {/* <img src={arrowRight} alt="" /> */}
          <div class="w-0 h-0 
            border-t-[1rem] border-t-transparent
            border-l-[1.5rem] border-l-[#413F54]
            border-b-[1rem] border-b-transparent">
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
