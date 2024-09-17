import { MetaRailLogo } from '../../../public';
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
      <footer className="font-sans -tracking-tight bg-[#3d4658] ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="w-full flex flex-col ">
            <a href="/" className="w-full flex mb-4 ">
              <img src={MetaRailLogo} className="h-10 " alt="MetaRail Logo" />
            </a>
            <ul className="flex justify-center  items-center mb-3 text-sm font-medium text-gray-50">
              <li>
                <a href="#" className=" me-4 ">Sobre</a>
              </li>
              <li>
                <a href="#" className="me-4 ">Políticas de Privacidade</a>
              </li>
              <li>
                <a href="#" className="me-4 ">Licenças</a>
              </li>
              <li>
                <a href="#" className="h">Contato</a>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-zinc-300 sm:mx-auto" />
          <span className="text-sm text-gray-400 flex justify-center">© 2024 <a href="/" className="hover:underline">MetaRail</a>. All Rights Reserved.</span>
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
                className="mt-2 w-[84px] md:w-[89px] absolute bottom-full left-0 z-10 bg-[#030303ec] text-base text-white divide-y divide-gray-100 "
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
