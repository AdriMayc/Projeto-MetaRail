import { Lupa, profile, MetaRailLogo } from '../../public';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function NavbarHeader() {

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoOff, setLogoOff] = useState(false);


  return (
    <nav className="w-full md:h-24 h-12 bg-[#5F5AA2] font-sans z-50">
      {/* Navbar Top */}
      <div id="navbarMain" className="w-full h-full md:h-[65%] bg-[#3d4658] flex justify-between items-center">
        <div className="md:hidden" data-dropdown-toggle="dropdown">
          <svg onClick={() => setMenuOpen(!menuOpen)}
            className={`w-7 h-7 ml-3 text-[#ffffff] duration-500 ${menuOpen ? "rotate-90 !text-[#4A589A] " : "rotate-0"}`}
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </div>

        <Link className="md:w-1/6 md:ml-16" to="#">
          <Link to="/">
            <img className={`${logoOff ? "hidden" : "block"} h-11  mt-[3px]  relative  duration-500  md:h-16 md:mt-[2px] md:block`}
              src={MetaRailLogo} alt="" />
          </Link>
        </Link>

        <div className="md:w-full  md:pr-0  md:flex md:justify-center">
          <input
            id=""
            placeholder="Pesquise Aqui..."
            className={`w-40 h-10 z-10 pt-2.5 absolute md:relative -translate-y-10 md:-translate-y-0 duration-700 ${logoOff ? "top-11" : "top-[-8%]"}
            md:w-1/3 md:h-10 md:z-0 searchBar md:left-0 md:pt-2.5 md:bg-[#ffffff] rounded-full placeholder-[#5F5AA2] border-none
            font-semibold text-xl text-[#5F5AA2]  focus:outline-none focus:ring-[#5F5AA2] focus:ring-4 md:focus:ring-[#5F5AA2]`}
            type="text"
          />
          <button type="submit" className="md:hidden">
            <img className="w-7 flex mt-2 mr-3 md:w-8 md:mt-0 md:ml-2 "
              src={Lupa} alt="lupa"
              onClick={() => setLogoOff(!logoOff)}
            />
          </button>
        </div>

        <div className="w-96  md:mr-14 tracking-wider md:text-[#ffffff] font-semibold  md:flex hidden md:justify-between items-center">
          <Link className="underline-animation  inline-block" to="#">DONATE</Link>
          <Link className="border md:border-4  border-[#5F5AA2] md:rounded-full md:py-2 md:px-3 hover:text-[#5d5991]" to="#">LOGIN</Link>
          <Link to="#">
            <img className="md:w-14" src={profile} alt="profile"/>
          </Link>
        </div>

        {/* Menu Content Mobile */}
        <div
          id="dropdown"
          className={`w-full bg-[#3d4658] absolute top-[24px] mt-[24px] flex-col border-t-2 border-t-[#4A589A]
          md:mr-16  items-center md:hidden transition-all duration-500 ease-in-out  ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="w-full h-full flex flex-col items-center justify-around text-white">
            <div className="md:w-full md:block flex flex-col">
              <Link to="#" className="px-4 py-2 order-3 md:px-4 md:py-1 md:uppercase md:flex md:font-semibold active:text-[#5F5AA2]">Donate</Link>
              <button
                type="text"
                className="h-auto px-4 py-2 border-none bg-transparent focus:ring-0 order-2
                md:border-2 md:border-[#5F5AA2] md:uppercase md:flex md:rounded-full md:font-semibold active:text-[#5F5AA2]"
              >
                <u>Login</u>
              </button>
              <Link to="#" className="w-14 ml-3.5">
                <img src={profile} alt="profile" />
              </Link>
            </div>

            <div className="flex flex-col items-center  md:text-black md:border md:border-black">
              <Link to="#" className="px-4 py-2 order-4 active:text-[#5F5AA2] ">Equipes</Link>
              <Link to="#" className="px-4 py-2 order-5 active:text-[#5F5AA2]">Tier List</Link>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown2"
                className={`w-full px-4 py-2 ml-3 text-center inline-flex justify-center items-center order-6
                active:text-[#5F5AA2] ${!menuOpen ? "text-white" : "text-[#5F5AA2]"} ${isOpen ? "text-[#5F5AA2]" : "text-white"} `}
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
                  <Link to="#" className="block px-4 py-2 active:text-[#5F5AA2]">Cones de Luz</Link>
                </li>
                <li className="flex justify-center">
                  <Link to="#" className="block px-4 py-2 active:text-[#5F5AA2]">Ornamentos</Link>
                </li>
                <li className="flex justify-center">
                  <Link to="#" className="block px-4 py-2 active:text-[#5F5AA2]">Relíquias</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      {/* Navbar Bottom */}
      <div className="md:w-full md:h-[35%] md:flex md:justify-center">
      <ul className="hidden md:w-5/6 md:border-[3px] md:border-[#5F5AA2] md:flex md:justify-evenly md:text-white md:font-semibold md:text-2xl">
          <li className="underline-animation inline-block"><Link to="/">Home</Link></li>
          <li className="underline-animation inline-block"><Link to="/cones">Cones de Luz</Link></li>
          <li className="underline-animation inline-block"><Link to="/equipes">Equipes</Link></li>
          <li className="underline-animation inline-block"><Link to="/ornamentos">Ornamentos</Link></li>
          <li className="underline-animation inline-block"><Link to="/reliquias">Relíquias</Link></li>
          <li className="underline-animation inline-block"><Link to="/tierlist">Tier List</Link></li>
        </ul>
      </div>
    </nav>
  );
}

