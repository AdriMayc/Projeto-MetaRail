import SlideCharacter from '../slide-character/slide-character.jsx'
import abundancePath from '../../../../public/paths/AbundancePath.png'
import destructionPath from '../../../../public/paths/DestructionPath.png'
import eruditionPath from '../../../../public/paths/EruditionPath.png'
import harmonyPath from '../../../../public/paths/HuntPath.png'
import huntPath from '../../../../public/paths/NihilityPath.png'
import nihilityPath from '../../../../public/paths/SlothPath.png'
import slothPath from '../../../../public/paths/VerityPath.png'

import nivel1 from '../../../../public/nivel1.svg'
import nivel80 from '../../../../public/nivel80.svg'
import filterIMG from '../../../../public/filterIcon.svg'
import { useState } from 'react'


const paths = [
    { id: 1, title: "Abundancia", image: abundancePath},
    { id: 2, title: "Caça", image: huntPath, validade: '00/00/0000' },
    { id: 3, title: "Destruição", image: destructionPath, validade: '00/00/0000' },
    { id: 4, title: "Erudição", image: eruditionPath, validade: '00/00/0000' },
    { id: 5, title: "Harmonia", image: harmonyPath },
    { id: 6, title: "Inexistência", image: nihilityPath, validade: '00/00/0000' },
    { id: 7, title: "Preservação", image: slothPath, validade: '00/00/0000' },
];

export default function personagens() {
   
    const[nvl, setNvl] = useState(false)
    const[filtro, setFiltro] = useState(true)
    
    return (
        <div className="w-full h-auto px-2 pt-1 pb-4 bg-[#2C252B] flex justify-center text-white">
            {/* Div do slides de personagens */}
            <div className="w-6/6 min-h-full py-1 px-2 bg-[#413f54] rounded-[30px] overflow-x-hidden">
                {/* Filtro por nivel e maior stats */}
                <div className='
                    flex right-0 mx-6 my-2 absolute items-center
                    lg:right-[19rem]
                    '>
                    <img 
                        className={`
                            mr-2 w-12 h-9 ${nvl ? "hidden" : "visible"}
                            md:w-20 h-20
                        `} 
                        src={nivel1}
                        onClick={() => setNvl(!nvl)}
                    >
                    </img>
                    <img 
                        className={`
                            mr-2 w-12 h-9 ${nvl ? "visible" : "hidden"}
                            md:w-20 h-20
                        `} 
                        src={nivel80}
                        onClick={() => setNvl(!nvl)}>
                    </img>
                    <img 
                        className="ml-2 w-10 h-10" 
                        src={filterIMG}
                        onClick={() => setFiltro(!filtro)}
                    >
                    </img>
                    
                </div>
                {/* Menu do filtro */}
                <div className={`${filtro ? "opacity-0 invisible" : "opacity-100"}
                        w-full left-0 top-[22rem] px-1 absolute rounded-2xl z-10  flex justify-center
                        md:w-4/6 md:absolute md:top-[47rem] md:left-64 md:mx-2 md:px-2
                        transition-all duration-200
                    `}>
                    <ul className="
                        w-full mx-1 py-1 rounded-2xl text-2xl bg-[#2C252B]
                        md:m-0 md:p-1 md:border-2 border-[#413F54]
                    ">
                        <li className="
                            py-1 px-5 border-b-2 border-[#413F54] rounded-t-xl hover:bg-[#413F54]
                            " onClick={() => setFiltro(!filtro)}> 
                            ATK 
                        </li>
                        <li className="
                            py-1 px-5 border-b-2 border-[#413F54] hover:bg-[#413F54]
                            " onClick={() => setFiltro(!filtro)}>
                             DEF 
                        </li>
                        <li className="
                            py-1 px-5 border-b-2 border-[#413F54] hover:bg-[#413F54]
                            " onClick={() => setFiltro(!filtro)}>
                             ATKSPEED 
                        </li>
                        <li className="
                            py-1 px-5 rounded-b-xl hover:bg-[#413F54]
                            " onClick={() => setFiltro(!filtro)}>
                             LIFE 
                        </li>
                    </ul>
                </div>
                {/* Gerando os caminhos(path) */}
                {paths.map((path)  => (
                    <div
                        key={path.id}
                        className='min-w-full h-1/8 overflow-x-hidden'
                    >
                        {/* DIV DO CAMINHO*/}
                        <div className="w-full h-auto my-5 mx-0 text-left text-xl font-semibold flex flex-shrink-0 items-center">
                            <div className='w-full h-full  flex justify-between items-center'>
                                <div className='w-auto md:min-w-80 md:px-5 flex items-center'>
                                    <img className="w-14 md:w-20 opacity-50" src={path.image} alt="" />
                                    <span className='mx-1 text-xl md:ml-4 md:text-4xl font-sans font-semibold'> 
                                        {path.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Carregando o slide de personagens */}
                        <SlideCharacter/>
                    </div>
                ))}

            </div>

        </div>
    )
}