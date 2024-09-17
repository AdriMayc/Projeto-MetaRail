import { useState } from "react";
import { hearthIcon, shieldIcon, atkIcon, spdIcon } from "../../../../public"
import AccordionItem from './accordion'

// Introdução
export const Introdution = () => {
    return (
        <>
            <div className="pt-3  flex  flex-col  items-center">
                <img className="w-48   bg-black  rounded-[1.7rem] " src="https://rerollcdn.com/STARRAIL/Characters/Full/3017.png" alt="" />
                <h2 className="text-2xl font-semibold underline ">Acheron</h2>


                <h3 className="text-zinc-500">Inexistência</h3>
                <img className="w-10" src="https://rerollcdn.com/STARRAIL/Elements/lightning.png" alt="Raio" />
                <h2 className="mt-2 font-semibold ">Tier List</h2>
            </div>

            <table className="w-[90%]  my-2 text-sm border-2 flex flex-col ">
                <thead className=" border-b-2 ">
                    <tr className="w-full flex justify-evenly text-zinc-400">
                        <th className="w-1/3 font-light">Geral </th>
                        <th className="w-1/3 font-light">Alvo Único</th>
                        <th className="w-1/3 font-light">Dano em Área</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="w-full flex justify-around">
                        <td className="font-mono text-lg ">SS</td>
                        <td className="font-mono text-lg ">SS</td>
                        <td className="font-mono text-lg ">SS</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

// TierList da Comunidade
export const TierList = () => {
    // Max Vote Value
    const voteValue = 10000;
    const voted = 2852
    const totalVotes = (voted / voteValue) * 100

    // Variavel para Clique
    const [isVoted, setIsVoted] = useState({
        div1: false,
        div2: false,
        div3: false,
        div4: false,
        div5: false,
    }); // Botão de Votar

    const thisVote = (div) => {
        setIsVoted(prevState => ({
            ...prevState,
            [div]: !prevState[div], // Altera apenas o div clicado
        }));
    };


    return (
        <>
            <h2 className="mt-2 font-semibold ">Tier List da Comunidade</h2>
            <h3 className="font-thin text-sm  text-slate-300 flex justify-center ">
                Clique para Votar
            </h3>


            <div className="w-full h-20 mt-2 mb-5 flex justify-center gap-2 ">
                {/* SS */}
                <div
                    id="div1"
                    onClick={() => thisVote('div1')}
                    className={`
                    w-1/6  border-2  bg-transparent font-mono text-2xl flex flex-wrap items-center justify-center relative rounded-md cursor-pointer`}
                >
                    <div className=" bg-[#5F5AA2] h-full absolute  left-0 transition-all duration-1000 rounded-s-md  opacity-80 "
                        style={{ width: `${isVoted.div1 ? totalVotes : 0}%`, opacity: `${isVoted ? 100 : 0}` }}></div>
                    <span className="absolute inset-0 flex items-center justify-center">SS</span>
                    <span className=" absolute inset-x-0 bottom-0 text-xs text-center">{voted}</span>

                </div>
                {/* S */}
                <div
                    id="div1"
                    onClick={() => thisVote('div2')}
                    className={`
                    w-1/6  border-2  bg-transparent font-mono text-2xl flex flex-wrap items-center justify-center relative rounded-md cursor-pointer`}
                >
                    <div className=" bg-[#5F5AA2] h-full absolute  left-0 transition-all duration-1000 rounded-s-md  opacity-80 "
                        style={{ width: `${isVoted.div2 ? totalVotes : 0}%`, opacity: `${isVoted ? 100 : 0}` }}></div>
                    <span className="absolute inset-0 flex items-center justify-center">S</span>
                    <span className=" absolute inset-x-0 bottom-0 text-xs text-center">{voted}</span>

                </div>
                {/* A */}
                <div

                    onClick={() => thisVote('div3')}
                    className={`
                    w-1/6  border-2  bg-transparent font-mono text-2xl flex flex-wrap items-center justify-center relative rounded-md cursor-pointer`}
                >
                    <div className=" bg-[#5F5AA2] h-full absolute  left-0 transition-all duration-1000 rounded-s-md  opacity-80 "
                        style={{ width: `${isVoted.div3 ? totalVotes : 0}%`, opacity: `${isVoted ? 100 : 0}` }}></div>
                    <span className="absolute inset-0 flex items-center justify-center">A</span>
                    <span className=" absolute inset-x-0 bottom-0 text-xs text-center">{voted}</span>

                </div>
                {/* B */}
                <div
                    id="div1"
                    onClick={() => thisVote('div4')}
                    className={`
                    w-1/6  border-2  bg-transparent font-mono text-2xl flex flex-wrap items-center justify-center relative rounded-md cursor-pointer`}
                >
                    <div className=" bg-[#5F5AA2] h-full absolute  left-0 transition-all duration-1000 rounded-s-md  opacity-80 "
                        style={{ width: `${isVoted.div4 ? totalVotes : 0}%`, opacity: `${isVoted ? 100 : 0}` }}></div>
                    <span className="absolute inset-0 flex items-center justify-center">B</span>
                    <span className=" absolute inset-x-0 bottom-0 text-xs text-center">{voted}</span>

                </div>
                {/* C */}
                <div
                    id="div1"
                    onClick={() => thisVote('div5')}
                    className={`
                    w-1/6  border-2  bg-transparent font-mono text-2xl flex flex-wrap items-center justify-center relative rounded-md cursor-pointer`}
                >
                    <div className=" bg-[#5F5AA2] h-full absolute  left-0 transition-all duration-1000 rounded-s-md  opacity-80 "
                        style={{ width: `${isVoted.div5 ? totalVotes : 0}%`, opacity: `${isVoted ? 100 : 0}` }}></div>
                    <span className="absolute inset-0 flex items-center justify-center">C</span>
                    <span className=" absolute inset-x-0 bottom-0 text-xs text-center">{voted}</span>

                </div>
            </div>


        </>
    )
}

// Seção de Status
export const Status = () => {
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

    const [isClicked, setIsClicked] = useState(false); // Botão de Level

    return (
        <>
            <section className="w-full h-96 mt-2 mb-5 flex flex-wrap">
                <h2 className="w-full flex justify-center font-semibold text-lg">Status</h2>

                {/* Start Toggle */}
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

                {/* Animated Bar Status */}
                <ul className="w-full">

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
                    </li>
                    {/*End Life Status*/}

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
                    </li>
                    {/*End Def Status*/}

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
                    </li>
                    {/*End Attak Status*/}

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
                    </li>
                    {/*End Speed Status*/}

                </ul>{/* End Animated Bar Status */}

                {/* Build Recomendada */}
                <div className="w-full flex flex-col justify-center items-center font-semibold leading-relaxed">
                    <h2>Build Recomendada</h2>
                    <ul className="w-full  mt-2  text-xs  text-gray-200  flex  flex-wrap  gap-2 justify-center">
                        <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Ataque: 2900 +</li>
                        <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Taxa de Crítico: 70% +</li>
                        <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Dano Crítico: 160% +</li>
                        <li className="w-[47%]  p-3   bg-[#5F5AA2]  rounded-lg  text-white">Velocidade: 101 +</li>
                    </ul>
                </div>
                {/* End Build Recomendada */}
            </section>
        </>
    )
}

// Materiais de Personagem / Rastro
export const Materials = () => {
    return (
        <>
            <section className="w-full">
                <div className="w-full mt-2 mb-6 flex flex-col justify-center items-center font-semibold ">

                    <h2>Material de Ascensão</h2>
                    <h3 className="font-thin text-sm mt-3 text-slate-300">Ascensão de Personagem</h3>

                    {/* Ascensão de Personagem */}
                    <ul className="w-auto  mt-2  text-sm  text-gray-200  flex flex-wrap gap-2 justify-center">
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
                    </ul>
                    {/* End Ascensão de Personagem */}

                    <h3 className="font-thin text-sm mt-3 text-slate-300">Ascensão de Rastros</h3>

                    {/* Ascensão/Rastros */}
                    <ul className="w-full   mt-2  gap-2  text-sm  text-gray-200  flex flex-wrap justify-center ">
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
                        <li className="p-3   bg-[#5F5AA2] flex  flex-col justify-center items-center  rounded-lg  text-white"
                        >
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
                    {/* End Ascensão/Rastros */}

                </div>
            </section>
        </>
    )
}

// Equipamentos
export const Equipments = () => {

    const text = ["24%", "34%"]

    return (
        <>
            <section className="w-full flex flex-col justify-center items-center">

                <h2 className="mt-2 font-semibold ">Equipamentos</h2>


                {/* Reliquias */}
                <div className="w-[95%] flex flex-col gap-2 ">
                    <h3 className="font-thin text-sm mt-2 text-slate-300 flex justify-center ">
                        Melhores Relíquias
                    </h3>
                    <AccordionItem
                        isOpenDefault={true} // começa aberto
                        title="Mergulhadora Pioneira de Águas Mortas" // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/relic_set/pioneer-diver-of-dead-waters-relic_set_icon.webp?x34722"
                        description={[
                            "(2) Aumenta em 12% o Dano causado a inimigos com penalidades.",
                            "(4) Aumenta a Chance de CRIT em 4%. O usuário causa 8%/12% de Dano CRIT aumentado em inimigos com pelo menos 2/3 penalidades. Após o usuário infligir uma penalidade nos inimigos-alvo, os efeitos mencionados anteriormente aumentam em 100%, durando por 1 rodada(s)."
                        ]} // Descrição Geral
                        rating={5} // Rank de Estrelas
                    />
                    <AccordionItem
                        isOpenDefault={false} // começa fechado
                        title="	Banda Trovão Crepitante"   // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/relic_set/band-of-sizzling-thunder-relic_set_icon.webp?x34722"
                        description={[
                            "(2) Aumenta o Dano de Raio em 10%.",
                            "(4) Quando o usuário usa a Perícia, aumenta o ATQ em 20% por 1 rodada(s)."
                        ]}
                        rating={4}
                    />
                    <AccordionItem
                        isOpenDefault={false} // começa fechado
                        title="Mergulhadora Pioneira de Águas Mortas" // Define o titulo
                        title2="Mosqueteira do Trigo Selvagem" // Define o titulo 2
                        imageUrl="https://starrail.honeyhunterworld.com/img/relic_set/pioneer-diver-of-dead-waters-relic_set_icon.webp?x34722"
                        secondImageUrl="https://starrail.honeyhunterworld.com/img/relic_set/musketeer-of-wild-wheat-relic_set_icon.webp?x34722"
                        description={[
                            "(2) Aumenta em 12% o Dano causado a inimigos com penalidades.",
                            "(2) Aumenta em 12% o ATQ."
                        ]} // Descrição Geral
                        rating={3} // Rank de Estrelas
                    />
                </div>

                {/* Ornamentos */}
                <div className="w-[95%] mt-4 flex flex-col gap-2 ">
                    <h3 className="font-thin text-sm mt-2 text-slate-300 flex justify-center">
                        Melhores Ornamentos</h3>

                    <AccordionItem
                        isOpenDefault={false} // começa fechado
                        title="	Izumo Gensei e Reino Divino de Takama" // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/relic_set/izumo-gensei-and-takama-divine-realm-relic_set_icon.webp?x34722"
                        description={[
                            "(2) Aumenta o ATQ do usuário em 12%. Ao entrar em batalha, se ao menos um outro aliado seguir o mesmo Caminho que o usuário, a Chance de CRIT do usuário aumenta em 12%."
                        ]} // Descrição Geral
                        rating={5} // Rank de Estrelas
                    />
                    <AccordionItem
                        isOpenDefault={false} // começa fechado
                        title="Estação de Vedação Espacial" // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/relic_set/space-sealing-station-relic_set_icon.webp?x34722"
                        description={[
                            "(2) Aumenta em 12% o ATQ do usuário. Quando a VEL do usuário chegar a 120 ou mais, aumenta em um extra de 12% o ATQ do usuário."
                        ]} // Descrição Geral
                        rating={4} // Rank de Estrelas
                    />
                    <AccordionItem
                        isOpenDefault={false} // começa fechado
                        title="Salsotto Inerte" // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/relic_set/inert-salsotto-relic_set_icon.webp?x34722"
                        description={[
                            "(2) Aumenta em 8% a Chance de CRIT do usuário. Quando a Chance de CRIT atual chegar a 50% ou mais, aumenta em 15% o Dano causado pelo Ataque Extra e pela Perícia Suprema do usuário."
                        ]} // Descrição Geral
                        rating={4} // Rank de Estrelas
                    />

                </div>

                {/* Cones de Luz */}
                <div className="w-[95%] mt-4 flex flex-col gap-2 ">
                    <h3 className="font-thin text-sm mt-2 text-slate-300 flex justify-center">
                        Melhores Cones de Luz</h3>

                    {/* 1 */}
                    <AccordionItem
                        starPlus="true"
                        isOpenDefault={false} // começa fechado
                        title="Ao Longo da Margem Transitória" // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/item/along-the-passing-shore-item_icon.webp?x34722"
                        description={[
                            "Aumenta o Dano CRIT do usuário em 36%. Quando o usuário atinge um inimigo-alvo, inflige Miragem Fracassada ao inimigo, durando por 1 rodada. Cada vez que o usuário ataca, este efeito pode ser acionado 1 vez contra cada alvo. O usuário causa 24% a mais de Dano aos alvos afligidos por Miragem Fracassada, e o Dano causado pela Perícia Suprema é aumentado adicionalmente em 24%."
                        ]} // Descrição Geral
                        rating={6} // Rank de Estrelas
                    />
                    {/* 2 */}
                    <AccordionItem
                        starPlus="true"
                        isOpenDefault={false} // começa fechado
                        title="Salsotto Inerte" // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/item/incessant-rain-item_icon.webp?x34722"
                        description={[`Aumenta a Taxa de Acerto de Efeito do usuário em ${text[0]}. Quando o usuário causa Dano a um inimigo com 3 ou mais penalidades no momento, aumenta a Chance de CRIT do usuário em 12%. Depois que o usuário usar o seu ATQ Básico, Perícia ou Perícia Suprema, existe uma chance-base de 100% de implantar Código do Éter em um alvo aleatório que ainda não esteja com Código do Éter. Alvos com Código do Éter recebem 12% a mais de Dano por 1 rodada.`]}
                        // Descrição Geral
                        rating={6} // Rank de Estrelas
                    />
                </div>

                {/* Substatus recomendados */}
                <div className="w-full flex flex-col justify-center items-center font-semibold leading-relaxed">

                    <h2 className="mt-2 font-semibold ">Status Recomendados</h2>

                    <div className="w-full flex flex-col justify-center items-center font-semibold leading-relaxed">

                        <ul className="w-full  mt-2  text-xs  text-gray-200  flex  flex-wrap  gap-2 justify-center">
                            <li className="w-[47%] bg-[#5F5AA2] p-3 flex gap-4 items-center   rounded-lg  text-white">Corpo:<span className="w-full text-zinc-300 font-thin">Taxa Crítica<br />Dano Crítico</span></li>
                            <li className="w-[47%] bg-[#5F5AA2] p-3 flex gap-4 items-center   rounded-lg  text-white">Pés:<span className="w-full text-zinc-300 font-thin">Ataque<br />Velocidade</span></li>
                            <li className="w-[47%] bg-[#5F5AA2] p-3 flex gap-2 items-center   rounded-lg  text-white">Esfera Plana:<span className="w-full text-zinc-300 font-thin">Ataque<br />Dano de Raio</span></li>
                            <li className="w-[47%] bg-[#5F5AA2] p-3 flex gap-2 items-center   rounded-lg  text-white">Corda:<span className="w-full text-zinc-300 font-thin">Ataque</span></li>
                        </ul>
                        <h2 className="font-light text-base mt-2 ">Subatributo</h2>
                        <ul className="w-full  mt-2 mb-4  text-xs  text-gray-200  flex  gap-2 justify-center">
                            <li className="w-[30%] p-3 flex gap-4 items-center border  rounded-lg  text-white">
                                <span className="w-full text-zinc-300 font-thin flex justify-center">Taxa Crítica</span>
                            </li>
                            <li className="w-[30%]  p-3 flex gap-4 items-center border  rounded-lg  text-white">
                                <span className="w-full text-zinc-300 font-thin flex justify-center">Dano Crítico</span>
                            </li>
                            <li className="w-[30%]  p-3 flex gap-2 items-center border   rounded-lg  text-white">
                                <span className="w-full text-zinc-300 font-thin flex justify-center">Ataque (%)</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </>
    )
}
