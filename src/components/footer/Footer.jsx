import { MetaRailLogo } from '../../../public';
import React, { useState } from 'react';


function Footer() {


  return (
    <>
      <footer className="font-sans -tracking-tight bg-[#000000] ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="w-full flex flex-col ">
            <ul className="flex justify-center  items-center mb-1.5 text-sm font-medium text-gray-50">
              <li>
                <a href="#" className="me-4 hover:opacity-50">Sobre</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:opacity-50">Políticas de Privacidade</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:opacity-50">Licenças</a>
              </li>
              <li>
                <a href="#" className="hover:opacity-50 ">Contato</a>
              </li>
            </ul>
          </div>
          <hr className="mb-2 border-[#26292B]" />
          <span className="text-sm text-[#F5F5F5] opacity-50 flex justify-center">© 2024 <a href="/" className="hover:underline">MetaRail</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
