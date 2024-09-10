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
    const [isClicked, setIsClicked] = useState(false); // Botão de Level

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
                                <img src={hearthIcon} alt="Vida" className="w-7  my-2 " />
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
                    <div className="w-full flex flex-col justify-center items-center font-semibold"> {/* Build Recomendada */}
                        <h2>Build Recomendada</h2>
                        <ul className="w-full  mt-2  text-sm  text-gray-200  flex  flex-wrap  gap-2 justify-center">
                            <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Ataque: 2900 +</li>
                            <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Taxa de Crítico: 70% +</li>
                            <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Dano Crítico: 160% +</li>
                            <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Velocidade: 101-135 +</li>
                        </ul>
                    </div>{/* End Build Recomendada */}
                </section>{/* End Section Status */}

                <hr className="w-full" />

                <section className="w-full"> {/* Material de Upgrade */}
                    <div className="w-full mt-2 mb-6 flex flex-col justify-center items-center font-semibold ">
                        <h2>Material de Ascensão</h2>
                        <h3 className="font-thin text-sm mt-3 text-slate-400">Ascensão de Personagem</h3>
                        <ul className="w-auto  mt-2  text-sm  text-gray-200  flex flex-wrap gap-3 "> {/* Ascensão de Personagem */}
                            <li className="p-3   bg-[#5F5AA2]  flex  flex-col justify-center items-center  rounded-lg   text-white">

                                <img
                                    className="w-12 bg-[#413F54] rounded-xl"
                                    src="https://www.prydwen.gg/static/870e43dfc2678aeafa118048ba88e372/6766a/104.webp"
                                    alt="Material-1"
                                />
                                <span className="pt-1">
                                    15x
                                </span>
                            </li>
                            <li
                                className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white"
                                title="algo">
                                <img
                                    className="w-12  bg-[#413F54] rounded-xl"
                                    src="https://www.prydwen.gg/static/6e1eb8f979512dd9023035621bd0bf4e/6766a/103.webp"
                                    alt="Material-2"
                                />
                                <span className="pt-1">
                                    15x
                                </span>
                            </li>
                            <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                <img
                                    className="w-12  bg-[#413F54] rounded-xl"
                                    src="https://www.prydwen.gg/static/335658bcc7714ffc927f658d68f06e3d/6766a/112.webp"
                                    alt="Material-3" />
                                <span className="pt-1">
                                    15x
                                </span>
                            </li>
                            <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                <img
                                    className="w-12  bg-[#413F54] rounded-xl "
                                    src="https://www.prydwen.gg/static/374abdd1e080926aaf2a659e095fa9cb/6766a/41.webp"
                                    alt="Material-4" />
                                <span className="pt-1">
                                    65x
                                </span>
                            </li>
                            <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                <img
                                    className="w-12  bg-[#413F54] rounded-xl "
                                    src="https://www.prydwen.gg/static/5bcaa809090c0284f8d93094f21bdd95/6766a/11.webp"
                                    alt="Créditos" />
                                <span className="pt-1">
                                    308K
                                </span>
                            </li>
                        </ul> {/* End Ascensão de Personagem */}
                        <h3 className="font-thin text-sm mt-3 text-slate-400">Ascensão de Rastros</h3>
                        <ul className="w-full   mt-2  gap-3  text-sm  text-gray-200  flex flex-wrap  justify-center"> {/* Ascensão de Rastros */}
                            <li className="p-3   bg-[#5F5AA2]  flex  flex-col justify-center items-center  rounded-lg   text-white">

                                <img
                                    className="w-12 bg-[#413F54] rounded-xl"
                                    src="https://starrail.honeyhunterworld.com/img/item/fiery-spirit-item_icon_35.webp?x34722"
                                    alt="Material-1"
                                />
                                <span className="pt-1">
                                    18x
                                </span>
                            </li>
                            <li
                                className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white"
                                title="algo">

                                <img
                                    className="w-12  bg-[#413F54] rounded-xl"
                                    src="https://starrail.honeyhunterworld.com/img/item/starfire-essence-item_icon.webp?x34722"
                                    alt="Material-2"
                                />
                                <span className="pt-1">
                                    69x
                                </span>
                            </li>
                            <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                <img
                                    className="w-12  bg-[#413F54] rounded-xl"
                                    src="https://starrail.honeyhunterworld.com/img/item/heaven-incinerator-item_icon.webp?x34722"
                                    alt="Material-3" />
                                <span className="pt-1">
                                    139x
                                </span>
                            </li>
                            <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                <img
                                    className="w-12  bg-[#413F54] rounded-xl "
                                    src="https://starrail.honeyhunterworld.com/img/item/past-evils-of-the-borehole-planet-disaster-item_icon.webp?x34722"
                                    alt="Material de Chefe" />
                                <span className="pt-1">
                                    12x
                                </span>
                            </li>
                            <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                <img
                                    className="w-12  bg-[#413F54] rounded-xl "
                                    src="https://starrail.honeyhunterworld.com/img/item/tracks-of-destiny-item_icon.webp?x34722"
                                    alt="Rastro do Destino" />
                                <span className="pt-1">
                                    8x
                                </span>
                            </li>
                            {/* Segunda Linha */}
                            <ul className="w-full flex  gap-3 justify-center items-center">
                                <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                    <img
                                        className="w-12  bg-[#413F54] rounded-xl "
                                        src="https://starrail.honeyhunterworld.com/img/item/dream-collection-component-item_icon.webp?x34722"
                                        alt="Material1" />
                                    <span className="pt-1">
                                        41x
                                    </span>
                                </li>
                                <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                    <img
                                        className="w-12  bg-[#413F54] rounded-xl "
                                        src="https://starrail.honeyhunterworld.com/img/item/dream-flow-valve-item_icon.webp?x34722"
                                        alt="Material2" />
                                    <span className="pt-1">
                                        56x
                                    </span>
                                </li>
                                <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                    <img
                                        className="w-12  bg-[#413F54] rounded-xl "
                                        src="https://starrail.honeyhunterworld.com/img/item/dream-making-engine-item_icon.webp?x34722"
                                        alt="Material3" />
                                    <span className="pt-1">
                                        58x
                                    </span>
                                </li>
                                <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white">
                                    <img
                                        className="w-12  bg-[#413F54] rounded-xl "
                                        src="https://www.prydwen.gg/static/5bcaa809090c0284f8d93094f21bdd95/6766a/11.webp"
                                        alt="Créditos" />
                                    <span className="pt-1">
                                        3M
                                    </span>
                                </li>
                            </ul>

                        </ul> {/* End Ascensão de Rastros */}
                    </div>
                </section>{/* End Material de Upgrade */}

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