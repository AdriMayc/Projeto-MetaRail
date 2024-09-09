import { useState } from "react";
import { hearthIcon, shieldIcon, atkIcon, spdIcon } from "../../../public"


const profileCharacter = () => {
    // Valores Máximos
    const life = 1500;
    const def = 800;
    const atk = 750;
    const speed = 120;
    // Valores de Cálculo [Futuramente pegar da API]
    // Level 1
    const lifeVApi = 400;
    const defVApi = 200;
    const atkVApi = 400;
    const spdVApi = 90;
    // Level 80
    const lifeVApiMaxLevel = 998;
    const defVApiMaxLevel = 443;
    const atkVApiMaxLevel = 698;
    const spdVApiMaxLevel = 101;

    // Calculo de Retorno na "Progress Bar"
    let lifeValue = (lifeVApi / life) * 100
    let lifeReturnMax = (lifeVApiMaxLevel / life) * 100

    let defValue = (defVApi / def) * 100
    let defReturnMax = (defVApiMaxLevel / def) * 100

    let atkValue = (atkVApi / atk) * 100
    let atkReturnMax = (atkVApiMaxLevel / atk) * 100

    let speedValue = (spdVApi / speed) * 100
    let speedReturnMax = (spdVApiMaxLevel / speed) * 100

    // Variavel para Clique
    const [isClicked, setIsClicked] = useState(false);

    return (
        <body className="pt-12  bg-[#2C252B]  overflow-y-hidden text-white">

            <div className=" h-full w-auto m-6  bg-[#413F54]  flex flex-col  items-center  rounded-[1.7rem]"> {/* Background Content */}
                <div className="pt-3  flex  flex-col  items-center">
                    <img className="w-48   bg-black  rounded-[1.7rem] " src="https://rerollcdn.com/STARRAIL/Characters/Full/3017.png" alt="" />
                    <h2 className="text-2xl font-semibold underline ">Acheron</h2>
                    <h3 className="text-zinc-500">Inexistência</h3>
                    <img className="w-10" src="https://rerollcdn.com/STARRAIL/Elements/lightning.png" alt="Raio" />
                </div>
                <hr className="w-full" />
                <section className="w-full h-96 mt-2 mb-5 flex flex-wrap"> {/*Section Status*/}
                    <h2 className="w-full flex justify-center font-semibold text-lg">Status</h2>

                    <div className="w-full  flex justify-center ">
                        <label class="inline-flex items-center cursor-pointer ">
                            <span class="mr-4">Lvl. 1</span>
                            <input type="checkbox" value="" class="sr-only peer" onClick={() => setIsClicked(!isClicked)} />
                            <div class="relative w-32 h-1 bg-gray-200 peer-focus:outline-none 
                                 rounded-full  peer-checked:after:translate-x-[7.2rem] 
                                 after:content-['']  after:absolute after:top-[-8px]  after:start-[-3px]  after:bg-white  
                                 after:rounded-full  after:h-5  after:w-5  after:transition-all
                                 peer-checked:bg-[#5F5AA2] peer-checked:after:bg-[#5F5AA2]" ></div>
                            <span class="ml-4">Lvl. 80</span>
                        </label>
                    </div>

                    <ul className="w-full"> {/* Animated Bar Status */}
                        <li className="w-full  flex  justify-between  items-center">
                            <span className="w-1/5  flex  justify-center" >
                                <img src={hearthIcon} alt="Vida" className="w-7 my-2" />
                            </span>
                            <div className="w-3/5  h-2.5 bg-[#ddddddee] rounded-full">
                                <div className=" h-2.5 bg-[#5F5AA2]  rounded-full  duration-500" style={{ width: `${isClicked ? lifeReturnMax : lifeValue}%` }} ></div>
                            </div>
                            <span className={`w-1/5  flex  justify-center`}>
                                {isClicked ? lifeVApiMaxLevel : lifeVApi}
                            </span>
                        </li> {/*End Life Status*/}
                        <li className="w-full  flex  justify-between  items-center">
                            <span className="w-1/5  flex  justify-center" >
                                <img src={shieldIcon} alt="Escudo" className="w-7 my-1" />
                            </span>
                            <div className="w-3/5  h-2.5 bg-[#ddddddee] rounded-full">
                                <div className=" h-2.5  bg-[#5F5AA2]  rounded-full  duration-500" style={{ width: `${isClicked ? defReturnMax : defValue}%` }} ></div>
                            </div>
                            <span className={`w-1/5  flex  justify-center`}>
                                {isClicked ? defVApiMaxLevel : defVApi}
                            </span>
                        </li>{/*End Def Status*/}
                        <li className="w-full  flex  justify-between  items-center">
                            <span className="w-1/5  flex  justify-center" >
                                <img src={atkIcon} alt="Ataque" className="w-7 my-1" />
                            </span>
                            <div className="w-3/5  h-2.5 bg-[#ddddddee] rounded-full">
                                <div className=" h-2.5 bg-[#5F5AA2]  rounded-full  duration-500" style={{ width: `${isClicked ? atkReturnMax : atkValue}%` }} ></div>
                            </div>
                            <span className={`w-1/5  flex  justify-center`}>
                                {isClicked ? atkVApiMaxLevel : atkVApi}
                            </span>
                        </li>{/*End Attak Status*/}
                        <li className="w-full  flex  justify-between  items-center">
                            <span className="w-1/5  flex  justify-center" >
                                <img src={spdIcon} alt="Velocidade" className="w-7 my-1" />
                            </span>
                            <div className="w-3/5  h-2.5 bg-[#ddddddee] rounded-full">
                                <div className="h-2.5 bg-[#5F5AA2]  rounded-full  duration-500" style={{ width: `${isClicked ? speedReturnMax : speedValue}%` }} ></div>
                            </div>
                            <span className={`w-1/5  flex  justify-center`} >
                                {isClicked ? spdVApiMaxLevel : spdVApi}
                            </span>
                        </li>{/*End Speed Status*/}
                    </ul>{/* End Animated Bar Status */}

                    <div className="w-full flex flex-col justify-center items-center font-semibold">
                        <h2>Build Recomendada</h2>
                        <ul className="w-full  mt-2 text-sm text-gray-200 flex flex-wrap gap-2 justify-center">
                            <li className="w-[40%] p-3   bg-[#5F5AA2] rounded-lg text-white">Ataque: 2900 +</li>
                            <li className="w-[40%] p-3   bg-[#5F5AA2] rounded-lg text-white">Taxa de Crítico: 70% +</li>
                            <li className="w-[40%] p-3   bg-[#5F5AA2] rounded-lg text-white">Dano Crítico: 160% +</li>
                            <li className="w-[40%] p-3   bg-[#5F5AA2] rounded-lg text-white">Velocidade: 101-135 +</li>
                        </ul>  
                    </div>


                </section>{/* End Section Status */}

                <hr className="w-full" />
                <section>Material de Upgrade</section>
                <hr className="w-full" />
                <section>
                    <div>Melhores Relíquias</div>
                    <div>Melhores Ornamentos</div>
                    <div>Melhores Cones Luz</div>
                    <div>Substatus Recomendados</div>
                </section>
                <hr className="w-full" />
                <section>
                    <div>Rastro1</div>
                    <div>Rastro2</div>
                    <div>Rastro3</div>
                    <div>Rastro4</div>
                    <div>Rastro5</div>
                    <div>Rastros Pequenos</div>

                </section>
                <hr className="w-full" />
                <section>Eidolons</section>
                <hr className="w-full" />
                <section>Times</section>

            </div>
        </body>

    )
}

export default profileCharacter;