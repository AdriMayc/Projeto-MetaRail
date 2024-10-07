import { siteLogo } from "../../../public"
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Footer() {


  return (
    <>
      <footer className="font-sans -tracking-tight bg-[#000000] border-t border-[#DC1867] ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
          <div className="w-full flex  justify-between">

            <Link className="w-[13%] hidden md:flex md:mb-2">
              <img src={siteLogo} alt="logo footer" />
            </Link>

            <ul className="flex justify-center  items-center mb-1.5 text-sm font-medium text-gray-50 md:gap-10 md:mr-2 md:text-base md:mb-0">
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
          <span className="text-sm text-[#F5F5F5] opacity-50 flex md:ml-1 md:justify-start justify-center">© 2024 <a href="/" className="hover:underline">MetaRail</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
