import { profile, siteLogo, coffe } from "../../../public";
import Logo from "../../../public/Logo.svg"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Language } from "./components/Language"



export default function NavbarHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOff, setLogoOff] = useState(false);


  return (
    <nav className="w-full  z-20 md:h-[6rem] h-[50px] font-sans  fixed">
      {/* Navbar Top */}
      <div
        id="navbarMain"
        className="w-full h-full md:px-8 md:h-[65%] bg-[#000000] flex justify-between items-center border-b border-[#DC1867]"
      >
        <div className="md:hidden" data-dropdown-toggle="dropdown">
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-7 h-7 ml-5 text-[#ffffff] duration-500 ${menuOpen ? "rotate-90 !text-[#DC1867] " : "rotate-0"
              }`}
            aria-hidden='true'
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </div>

        <Link className="md:w-[30rem]" to="#">
          <Link to="/">
            <img
              className={`${logoOff ? "hidden" : "block"
                }  mt-[3px]  relative  duration-500 md:hidden`}
              src={Logo}
              alt="Logo"
            />
            <img
              className="hidden md:block md:w-[65%]"
              src={siteLogo} alt="logo desktop" />
          </Link>
        </Link>

        <div className="md:w-full  md:pr-0  md:flex md:justify-center">
          <input
            id=""
            placeholder="Pesquise Aqui..."
            className={`w-40 h-10 z-10 pt-2.5 absolute md:relative -translate-y-10 md:-translate-y-0 duration-700 ${logoOff ? "top-[2.85rem]" : "top-[-8%]"
              }
            md:w-[40%] md:h-10 md:z-0 searchBar md:left-0 md:pt-2.5 md:bg-[#ffffff] rounded-full  placeholder-[#810E3C] focus:placeholder-[#DC1867] border-none
            font-semibold text-xl text-[#DC1867]  focus:outline-none focus:ring-[#DC1867] focus:ring-4 md:focus:ring-[#DC1867]`}
            type="text"
          />
          <button type="submit" className="md:hidden">

            <svg
              className="w-7 flex mt-2 mr-5 md:w-8 md:mt-0 md:ml-2"
              width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={() => setLogoOff(!logoOff)}
            >
              <path d="M24.66 21.6178L19.7915 16.7493C19.5717 16.5295 19.2739 16.4074 18.9613 16.4074H18.1654C19.5131 14.6837 20.314 12.5156 20.314 10.157C20.314 4.54623 15.7678 0 10.157 0C4.54623 0 0 4.54623 0 10.157C0 15.7678 4.54623 20.314 10.157 20.314C12.5156 20.314 14.6837 19.5131 16.4074 18.1654V18.9613C16.4074 19.2739 16.5295 19.5717 16.7493 19.7915L21.6178 24.66C22.0768 25.119 22.8191 25.119 23.2732 24.66L24.6551 23.2781C25.1141 22.8191 25.1141 22.0768 24.66 21.6178ZM10.157 16.4074C6.70459 16.4074 3.90654 13.6143 3.90654 10.157C3.90654 6.70459 6.69971 3.90654 10.157 3.90654C13.6094 3.90654 16.4074 6.69971 16.4074 10.157C16.4074 13.6094 13.6143 16.4074 10.157 16.4074Z"
                fill={`${logoOff ? "#DC1867" : "#F5F5F5"}`} />
            </svg>

          </button>
        </div>

        <div className="w-[30rem]  tracking-wider md:text-[#ffffff] font-semibold  md:flex hidden md:justify-around items-center ">
          <div className="z-40">
            <Language />
          </div>


          <Link className="flex items-center justify-center border-[2px] border-[#DC1867] rounded-xl px-2 py-0.5 hover:opacity-60" to="#">
            <img className="w-7 mb-2 mr-1" src={coffe} alt="donate" />
            <span >
              DONATE
            </span>
          </Link>
          <Link to="#">
            <img className="md:w-14 hover:opacity-70" src={profile} alt="profile" />
          </Link>
        </div>

        {/* Menu Content Mobile */}
        <div
          id="dropdown"
          className={`w-full  bg-[#000000] absolute top-[24px] mt-[24px] flex-col border-t-2 border-t-[#f7f7f7]
          md:mr-16  items-center md:hidden transition-all duration-500 ease-in-out  rounded-b-3xl
          ${menuOpen ? "max-h-96  opacity-100  visible" : "max-h-0  opacity-0  invisible"}`}
        >
          <ul className="w-full h-full flex flex-col items-center  text-white">
            {/* Primeira linha com 3 colunas */}
            <div className="w-full flex justify-between items-center px-16 mt-4">
              <div className="w-1/3 flex justify-start items-center relative">
                <Language />
              </div>
              <div className="w-1/3 flex justify-center ">
                <a className="text-center underline hover:text-[#DC1867]" href="#">Login/Sair</a>
              </div>
              <div className="w-1/3 flex justify-end hover:text-[#DC1867]">
                <a className="" href="#">Donate</a>
              </div>
            </div>
            <hr className="border text-white w-[20rem] mt-2 " />

            <div className="flex flex-col items-center  md:text-black md:border md:border-black">
              <Link to="#" className="px-4 py-2 order-4 active:text-[#DC1867] ">
                Equipes
              </Link>
              <Link to="#" className="px-4 py-2 order-5 active:text-[#DC1867]">
                Tier List
              </Link>


              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown2"
                className={`w-full px-4 py-2 ml-3 text-center inline-flex justify-center items-center order-6
                active:text-[#dc1866ce] ${!menuOpen ? "" : "text-[#DC1867]"
                  } `}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Inside */}
              <ul
                id="dropdown2"
                className={`w-full item-center order-7 transition-all duration-500 ease-in-out
                ${isOpen ? "max-h-40  opacity-100" : "max-h-0 opacity-0"}`}
                aria-labelledby="dropdownDefaultButton"
              >
                <li className="flex justify-center">
                  <Link
                    to="#"
                    className="block px-4 py-2 active:text-[#DC1867]"
                  >
                    Cones de Luz
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link
                    to="#"
                    className="block px-4 py-2 active:text-[#DC1867]"
                  >
                    Ornamentos
                  </Link>
                </li>
                <li className="flex justify-center">
                  <Link
                    to="#"
                    className="block px-4 py-2 active:text-[#DC1867]"
                  >
                    Relíquias
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      {/* Navbar Bottom */}
      <div className=" md:h-[35%] md:flex md:justify-center md:bg-black border-b border-[#DC1867]">
        <ul className="hidden md:uppercase md:items-center md:w-5/6 md:flex md:justify-between md:text-white md:font-semibold md:text-2xl;">
          <li className="underline-animation">
            <Link to="/">home</Link>
          </li>
          <li className="underline-animation">
            <Link to="/cones">Cones de Luz</Link>
          </li>
          <li className="underline-animation">
            <Link to="/equipes">Equipes</Link>
          </li>
          <li className="underline-animation">
            <Link to="/ornamentos">Ornamentos</Link>
          </li>
          <li className="underline-animation">
            <Link to="/reliquias">Relíquias</Link>
          </li>
          <li className="underline-animation">
            <Link to="/tierlist">Tier List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}