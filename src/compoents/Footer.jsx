import { MetaRailLogo } from '../../public';
import React, { useState } from 'react';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('PT-BR');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectYourLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <>
      <footer className="font-sans -tracking-tight">
        {/* Seção principal do footer */}
        <div className="w-full min-h-[200px] bg-[#3d4658] flex flex-col items-center text-white">
          {/* Logo do Site */}
          <a href="#">
            <img className="h-14 mt-2" src={MetaRailLogo} alt="Logo" />
          </a>
          {/* Informações de copyright */}
          <ul>
            <li className='text-[11px]' >© 2024 MetaRail.</li>
          </ul>
          {/* Links de navegação */}
          <ul className="space-y-4 mt-2 mb-2 flex flex-col items-center text-lg">
            <li className='active:text-[#5F5AA2]'><a href="#">Contato</a></li>
            <li className='active:text-[#5F5AA2]'><a href="#">Feedbacks</a></li>
            <li className='active:text-[#5F5AA2]'><a href="#">Direitos Autorais</a></li>
            <li className='active:text-[#5F5AA2]'><a href="#">Políticas de Privacidade</a></li>
          </ul>
        </div>
        {/* Seção de Atualização */}
        <div className="w-full max-h-[40px] bg-[#000000] text-white flex items-center relative">
          <div className="relative ">
            <button
              type='button'
              onClick={toggleDropdown}
              className="w-40 text-white px-4 py-2 flex items-center"
            >
              {selectedLanguage}
              <svg
                className={`w-2.5 h-2.5 ms-3 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                id="dropdownTop"
                className="mt-2 w-[84px] absolute bottom-full left-0 z-10 bg-[#030303ec] text-base text-white divide-y divide-gray-100 "
              >
                <ul className="py-2" aria-labelledby="dropdownTopButton">
                  <li>
                    <button
                      onClick={() => selectYourLanguage('PT-BR')}
                      className="block px-4 py-2 hover:text-zinc-500 w-full text-left"
                    >
                      PT-BR
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => selectYourLanguage('EN-US')}
                      className="block px-4 py-2 hover:text-zinc-500 w-full text-left"
                    >
                      EN-US
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ul className="flex w-full justify-end mx-2 font-light">
            <li>Atualizado: <span className='text-[#5F5AA2]'>00/00/00</span></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
