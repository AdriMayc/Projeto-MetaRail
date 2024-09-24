import React, { useState, useRef } from 'react';
import { StarRating, StarRatingMore } from './starRating';

const Accordion = ({ isOpenDefault = false, title, title2, imageUrl, secondImageUrl = null, description, coneDescription, rating, starPlus }) => {
    const [isOpen, setIsOpen] = useState(isOpenDefault);
    const contentRef = useRef(null); // Usado para calcular a altura do conteúdo

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    //Light Cone Description
    
    return (
        <div className="accordion-container border border-[#26292B] rounded-lg overflow-hidden">
            <button
                className="w-full flex items-center bg-transparent relative"
                onClick={toggleAccordion}
            >
                {/* Container que segura a imagem e o conteúdo central */}
                <div className="w-full h-16 flex items-center justify-between px-4">
                    {/* Imagem no canto esquerdo */}
                    <img
                        src={imageUrl}
                        alt="Placeholder"
                        className={`w-12 bg-[#26292b5b] rounded-lg border border-[#26292B] transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-0" : "opacity-100 delay-[400ms]"}`}
                    />
                    {secondImageUrl && (
                        <img
                            src={secondImageUrl}
                            alt="Placeholder"
                            className={`w-12 ml-[3.15rem] bg-[#26292b5b] border-[#26292B] rounded-lg border absolute  transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-0" : "opacity-100 delay-[400ms]"}`}
                        />
                    )}

                    {/* Estrelas no centro */}
                    {!starPlus && (
                        <span className="w-[90%] font-semibold flex absolute justify-center ml-[1rem]">
                            <StarRating rating={rating} />
                        </span>
                    )}
                    {starPlus && (
                        <span className="w-[90%] font-semibold flex absolute justify-center ml-[1rem]">
                            <StarRatingMore rating={rating} />
                        </span>
                    )}

                </div>

                {/* SVG (botão) na direita */}
                <svg
                    className={`absolute right-2 h-6 w-6 text-[#DC1867] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Content with transition */}
            <div
                ref={contentRef}
                className={`accordion-content overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
            >
                <div className="flex flex-col justify-center">
                    <div className="flex h-full w-full pt-2 px-4 gap-4">
                        {/* Container para as imagens e títulos à esquerda */}
                        <div className="flex flex-col items-start gap-4">
                            {/* Primeiro par de imagem e título */}
                            <div className="flex items-center gap-2">
                                <img
                                    src={imageUrl}
                                    alt="Imagem 1"
                                    className="w-16 rounded-lg border border-[#26292B]"
                                />
                                <h2 className="px-2 underline">{title}</h2>
                            </div>

                            {/* Segundo par de imagem e título (se houver) */}
                            {secondImageUrl && (
                                <div className="flex items-center gap-2">
                                    <img
                                        src={secondImageUrl}
                                        alt="Imagem 2"
                                        className="w-16 rounded-lg border border-[#26292B]"
                                    />
                                    <h2 className="px-2 underline">{title2}</h2>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-full p-4 flex flex-wrap text-zinc-400 text-sm leading-relaxed gap-2">
                        <p>{description[0]}</p>
                        <p>{description[1]}</p>
                        <p>{coneDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
