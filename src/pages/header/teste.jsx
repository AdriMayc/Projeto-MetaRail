import lupa from "../../../public/lupa.png";
import logoMarca from "../../../public/MetaRail-Logo.png";
import profile from "../../../public/profile.png";
import React, { useState } from 'react';

export default function NavbarHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full md:h-24 h-12 bg-[#4A589A] font-sans">
      <div className="w-full h-full md:h-[65%] bg-[#3d4658] flex justify-between items-center">
        {/*--- DropDown Icon ---*/}
        <div className="md:hidden" data-dropdown-toggle="dropdown">
          <svg className="w-7 h-7 ml-3 text-[#ffffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </div>

        {/*--- Logo ---*/}
        <a className="md:w-1/6 md:ml-16" href="#">
          <img className="h-11 mt-[3px] md:h-16 md:mt-[2px]" src={logoMarca} alt="" />
        </a>

        {/*--- Search / Mobile-Hidden ---*/}
        <div className="md:px-8 md:pr-0 md:flex">
          <input
            placeholder="Pesquise Aqui..."
            className="hidden md:w-80 md:h-8 md:pl-5 md:pt-2.5 md:bg-[#ffffff] md:rounded-full md:placeholder-zinc-700 md:placeholder:hover md:font-semibold md:text-base md:text-zinc-700 md:block md:focus:outline-none md:focus:border-zinc-700 md:focus:ring-1 md:focus:ring-zinc-700"
            type="text"
          />
          <button type="submit">
            <img className="w-7 flex mt-2 mr-3 md:w-8 md:mt-0 md:ml-2" src={lupa} alt="lupa" />
          </button>
        </div>

        {/*--- Show PC Menu ---*/}
        <div className="md:w-1/6 md:mr-14 tracking-wider md:text-[#ffffff] font-semibold md:text-sm md:flex hidden md:justify-between items-center">
          <a href="#">DONATE</a>
          <a className="md:border border-[3px] border-[#4A589A] md:rounded-full md:py-2 md:px-3" href="#">LOGIN</a>
          <a href="#">
            <img className="md:w-14" src={profile} alt="profile" />
          </a>
        </div>

        {/*--- Menu Content ---*/}
        <div
          id="dropdown"
          className="w-full min-h-[25%] z-10 bg-[#3d4658] absolute top-12 flex-col border-t-2 border-t-[#4A589A] md:w-1/6 md:mr-16 hidden "
        >
          <ul className="w-full h-full flex flex-col items-center justify-around text-white">
            <div className="md:w-full md:block flex flex-col items-center">
              <a href="#" className="px-4 py-2 order-3 md:px-4 md:py-1 md:uppercase md:flex md:font-semibold active:text-[#5F5AA2]">
                Donate
              </a>
              <button
                type="text"
                className="h-auto px-4 py-2 border-none bg-transparent focus:ring-0 order-2 md:border-2 md:border-[#5F5AA2] md:uppercase md:flex md:rounded-full md:font-semibold active:text-[#5F5AA2]"
              >
                <u>Login</u>
              </button>
              <a href="#" className="w-14">
                <img src={profile} alt="profile" />
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a href="#" className="px-4 py-2 order-4 active:text-[#5F5AA2]">Tier List</a>
              <a href="#" className="px-4 py-2 order-5 active:text-[#5F5AA2]">Equipes</a>
              <button
                id="dropdownDefaultButton"
                className={`w-full px-4 py-2 ml-3 text-center inline-flex justify-center items-center order-6 active:text-[#5F5AA2] ${ isOpen ? "text-[#5F5AA2]" : "text-white"}`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <u className="">Conjuntos</u>
                <svg className="w-2.5 h-2.5 ml-1 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isOpen && (
                <ul
                  id="dropdown2"
                  className="w-full order-7 relative bg-[#3d4658]"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li className="flex justify-center">
                    <a href="#" className="block px-4 py-2 active:text-[#5F5AA2]">Relíquias</a>
                  </li>
                  <li className="flex justify-center">
                    <a href="#" className="block px-4 py-2 active:text-[#5F5AA2]">Ornamentos</a>
                  </li>
                  <li className="flex justify-center">
                    <a href="#" className="block px-4 py-2 active:text-[#5F5AA2]">Cones de Luz</a>
                  </li>
                </ul>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}