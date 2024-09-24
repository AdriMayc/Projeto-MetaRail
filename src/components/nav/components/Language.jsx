import { useState } from "react";
import { Br, En } from "../../../../public"

export const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Pt-Br');


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectYourLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <>
      <div className="absolute -left-7 ">
        <img className="w-5 mr-1 " src={`${selectedLanguage === 'Pt-Br' ? Br : En}`} alt="Linguagem" />
      </div>
      <div className=" relative ">
        <button
          type='button'
          onClick={toggleDropdown}
          className="w-auto text-[#DC1867] flex items-center text-sm whitespace-nowrap"
        >
          {selectedLanguage}
          <svg
            className={`w-2.5 h-2.5 ms-1 transform transition-transform duration-300 text-[#DC1867] ${isOpen ? 'rotate-0' : 'rotate-180'}`}
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
            id="dropdownBottom"
            className="mt-2 w-[80px] absolute -left-4 z-30 bg-[#111213] text-base text-white "
          >
            <ul className="py-2" aria-labelledby="dropdownTopButton">
              <li>
                <button
                  onClick={() => selectYourLanguage('Pt-Br')}
                  className="w-full px-4 py-2 flex  justify-start hover:text-[#DC1867]  text-sm whitespace-nowrap"
                >
                  Pt-Br
                </button>
              </li>
              <li>
                <button
                  onClick={() => selectYourLanguage('En-Us')}
                  className="w-full px-4 py-2 flex justify-start hover:text-[#DC1867]  text-sm whitespace-nowrap"
                >
                  En-Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}