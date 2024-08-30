import lupa from "../../../public/Lupa.png";
import logoMarca from "../../../public/MetaRail-Logo.png";
import profile from "../../../public/profile.png"
import React, { useState } from 'react';

export default function NavbarHeader() {

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOff, setLogoOff] = useState(false);

  return (
    /* Order:   
    Phone
    PC 
    x   y  Bg  Text  Display   Any  */

    /*--- Start Header ---*/
    <nav className="w-full  md:h-24  h-12 bg-[#4A589A] font-sans">

      {/*--- NavBar Div Main Start ---*/}
      <div id="navbarMain" className="w-full  h-full  md:h-[65%]  bg-[#3d4658]  flex  justify-between  items-center">

        {/*--- DropDown Icon ---*/}
        <div className="md:hidden" data-dropdown-toggle="dropdown" >
          <svg onClick={() => setMenuOpen(!menuOpen)}
            className={`w-7 h-7 ml-3 text-[#ffffff] duration-500 ${menuOpen ? "rotate-90 !text-[#4A589A] " : "rotate-0"}`}

            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>

        </div> {/*--- End DropDown Icon ---*/}

        {/*--- Logo ---*/}
        <a className="md:w-1/6  md:ml-16 " href="#">
          <img
            className={` ${logoOff ? "hidden" : "block"}
              h-11 mt-[3px] relative duration-500
              md:h-16 md:mt-[2px`}
            src={logoMarca} alt="" />
        </a>

        {/*--- Search / Mobile-Hidden ---*/}
        <div className="md:px-8  md:pr-0 ">
          <input
            placeholder="Pesquise Aqui..."
            className={`
            w-40  h-10  z-10 pt-2.5 absolute left-[29.5%] -translate-y-10 duration-700 ${logoOff ? "top-11" : "top-[-8%]"}
            md:w-80  md:h-8  md:pl-5  md:pt-2.5 md:bg-[#ffffff]  rounded-full  placeholder-[#4a579a] border-none
            font-semibold text-lg text-[#4A589A] md:block focus:outline-none focus:ring-[#4A589A] focus:ring-4 md:focus:ring-[#4A589A]`}
            type="text"
          />
          <button type="submit">
            <img className=" 
              w-7 flex mt-2 mr-3
              md:w-8 md:mt-0 md:ml-2"
              src={lupa} alt="lupa"
              onClick={() => setLogoOff(!logoOff)}
            />
          </button>
        </div>

        {/*--- Show PC Menu ---*/}
        <div
          className="
          md:w-1/6  md:mr-14 tracking-wider md:text-[#ffffff] font-semibold md:text-sm  md:flex  hidden  md:justify-between items-center"
        >

          <a className="" href="#">DONATE</a>
          <a className="md:borde border-[3px] border-[#4A589A] md:rounded-full md:py-2 md:px-3" href="#">LOGIN</a>
          <a className="" href="#">
            <img className="md:w-14" src={profile} alt="profile" />
          </a>
        </div> {/* End PC Menu */}

        {/*--- Menu Content ---*/}
        <div
          id="dropdown"
          className=" hidden
          w-full    min-h-[25%]  bg-[#3d4658] absolute  flex-col border-t-2 border-t-[#4A589A]
          md:w-1/6  md:mr-16   md:hidden  md:justify-between  items-center "
        >
          {/*--- Start DropDown ---*/}
          <ul className="w-full h-full  flex flex-col items-center justify-around text-white">

            <div className="md:w-full md:block  flex flex-col"> {/*--- Start Donate,Login,Profile ---*/}
              <a href="#" className=" px-4 py-2  order-3  md:px-4  md:py-1  md:uppercase md:flex  md:font-semibold active:text-[#5F5AA2]">
                Donate
              </a>
              <button
                type="text"
                className="
                  h-auto  px-4  py-2  border-none bg-transparent  focus:ring-0 
                  order-2 
                  md:border-2  md:border-[#5F5AA2] md:uppercase  md:flex  md:rounded-full  md:font-semibold active:text-[#5F5AA2]"
              >
                <u>Login</u>
              </button> {/*--- Observação: Tirar o login ao estar logado ---*/}

              <a href="#" className=" w-14 ml-3.5">
                <img src={profile} alt="profile" />
              </a>
            </div>{/*--- End Donate,Login,Profile ---*/}

            <div className="flex flex-col items-center">  {/*--- Start NavLinks ---*/}
              <a href="#" className="px-4 py-2 order-4  active:text-[#5F5AA2]">
                Tier List
              </a>
              <a href="#" className="px-4  py-2  order-5  active:text-[#5F5AA2]">
                Equipes
              </a>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown2"
                className={`
                  w-full px-4 py-2 ml-3 text-center inline-flex justify-center items-center order-6 
                  active:text-[#5F5AA2] ${isOpen ? "text-[#5F5AA2]" : "text-white"}`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <u>Conjuntos</u>
                <svg
                  className="w-2.5 h-2.5 ml-1 mt-0.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* ---Dropdown Inside--- */}
              {isOpen && (
                <ul
                  id="dropdown2"
                  className="w-full item-center !relative !transform-none order-7"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li className="flex justify-center">
                    <a href="#" className="block  px-4  py-2 active:text-[#5F5AA2]">
                      Relíquias
                    </a>
                  </li>
                  <li className="flex justify-center">
                    <a href="#" className="block  px-4  py-2  active:text-[#5F5AA2]">
                      Ornamentos
                    </a>
                  </li>
                  <li className="flex justify-center">
                    <a href="#" className="block  px-4  py-2  active:text-[#5F5AA2]">
                      Cones de Luz
                    </a>
                  </li>
                </ul>)} {/*--- End Dropdown Inside ---*/}
            </div>  {/*--- End NavLinks ---*/}
          </ul>   {/*--- End DropDown ---*/}
        </div> {/*--- End Menu Content ---*/}
      </div> {/*--- NavBar Div Main End ---*/}
    </nav> /*--- End Header ---*/
  );
}

