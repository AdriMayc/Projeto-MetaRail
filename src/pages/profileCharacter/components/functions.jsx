import * as React from "react"
import {useState} from "react"
import { hearthIcon, shieldIcon, atkIcon, spdIcon, SS, S, A, B, C, body, feet, rope, sphere, exampleprofile, ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10 } from "../../../../public"
import AccordionItem from './accordion'
import DiscreteSlider from "./discreet-slider"


const valores = [
    {
        title:'ATK Básico',
        nvlMax: 9,
        A:[25, 30, 35, 40, 45, 50, 55, 60, 65]
    },
    {
        title:'Skill',
        nvlMax:15,
        A: [65], 
        B: [0], 
        C: [3], 
        D: [3, 3.3, 3.6, 3.9, 4.2, 4.5, 4.88, 5.25, 5.63, 6, 6.3, 6.6, 6.9, 7.2, 7.5], 
        E: [6, 6.6, 7.2, 7.8, 8.4, 9, 9.75, 10.5, 11.25, 12, 12.6, 13.2, 13.8, 14.4, 15]
    },
    {
        title:'Ultimate',
        nvlMax:15,
        A: [60, 64, 68, 72, 76, 80, 85, 90, 95, 100, 104, 108, 112, 116, 120]
    },
    {
        title:'Talent',
        nvlMax:15,
        A: [10, 10.8, 11.6, 12.5, 13.2, 14, 15, 16, 17, 18, 18.8, 19.6, 20.4, 21.2, 22], 
        B: [50], 
        C: [80, 81, 82, 83, 84, 85, 86.25, 87.5, 88.75, 90, 91, 92, 93, 94, 95],
    },
    {
        title:'Technique',
        nvlMax:1,
        C: 2
    },
    
]

// Introdução
export const Introdution = () => {
    return (
        <>
            <div className=" w-full h-[14.5rem] my-6 justify-between flex  items-center  ">
                {/* Foto do Personagem */}
                <div className="w-[50%]  flex justify-center relative border-r-2 border-[#26292B]">
                    <img
                        className="w-[150px] rounded-[10px] border-[1px] border-[#CCAD00]"
                        src="https://rerollcdn.com/STARRAIL/Characters/Full/3017.png" alt="Nome do Personagem" />
                </div>
                {/* Descrição do Personagem */}
                <div className="w-[50%] h-full flex flex-col items-start justify-center">
                    <ul className="w-full ml-4">
                        <li className="opacity-30 text-sm">Nome</li>
                        <li className="font-semibold text-xl">Acheron</li>
                        <li className="opacity-30 text-sm">Caminho</li>
                        <li className="font-semibold text-">Inexistência</li>
                        <li className="opacity-30 text-sm mb-1">Rank</li>
                    </ul>
                    {/* Rank Table */}
                    <table className="w-[9rem]  ml-4">
                        {/* Dano em Alvo Único */}
                        <tr className="border-b border-dashed border-[#f5f5f581]">
                            <td className=""><img className="w-6 " src={SS} alt="Single Target" /></td>
                            <td className="text-xs font-medium">Dano em Alvo Único</td>
                        </tr>
                        {/* Dano em Área  */}
                        <tr className="border-b border-dashed border-[#f5f5f581]">
                            <td className=""><img className="w-6 mr-1" src={SS} alt="Area Dmg" /></td>
                            <td className="text-xs font-medium">Dano em Área</td>
                        </tr>
                        {/* Geral */}
                        <tr className="border-b border-dashed border-[#f5f5f581]">
                            <td className=""><img className="w-6" src={SS} alt="Geral" /></td>
                            <td className="text-xs font-medium">Geral</td>
                        </tr>
                        {/* Suporte */}
                        <tr className="border-b border-dashed border-[#f5f5f581]">
                            <td className=""><img className="w-6" src={C} alt="Suport" /></td>
                            <td className="text-xs font-medium">Suporte</td>
                        </tr>
                    </table>

                </div>
            </div>

        </>
    )
}

// TierList da Comunidade
export const TierList = () => {
    const voteValue = 10000;
    const [voted, setVoted] = useState({
        div1: 1000,
        div2: 100,
        div3: 50,
        div4: 3,
        div5: 1,
    });
    const totalVotes = (value) => (value / voteValue) * 100;

    const [userVotes, setUserVotes] = useState({}); // Estado para controlar os votos do usuário
    const [votedItem, setVotedItem] = useState(null);

    const thisVote = (div) => {
        if (userVotes[div]) { // Se já tiver votado neste card, remove o voto
            setVoted((prevVotes) => ({
                ...prevVotes,
                [div]: prevVotes[div] - 1, // Diminui o valor em 1
            }));

            setUserVotes((prev) => ({
                ...prev,
                [div]: false, // Marca que o usuário não votou mais neste card
            }));

            if (votedItem === div) {
                setVotedItem(null); // Reseta o item votado
            }
        } else { // Se não tiver votado, registra o voto
            setVoted((prevVotes) => ({
                ...prevVotes,
                [div]: prevVotes[div] + 1, // Aumenta o valor em 1
            }));

            setUserVotes((prev) => ({
                ...prev,
                [div]: true, // Marca que o usuário votou neste card
            }));

            setVotedItem(div); // Define o novo voto
        }
    };

    const options = [
        { id: 'div1', imgSrc: SS, label: 'SS' },
        { id: 'div2', imgSrc: S, label: 'S' },
        { id: 'div3', imgSrc: A, label: 'A' },
        { id: 'div4', imgSrc: B, label: 'B' },
        { id: 'div5', imgSrc: C, label: 'C' },
    ];

    return (
        <>

            <h2 className="mt-6 font-semibold ">Avaliação de Personagem</h2>
            <h3 className="opacity-40 mt-2 text-xs">Vote aqui</h3>

            <div className="w-full h-16 my-6 flex justify-center gap-2">
                {options.map((option) => {
                    const isDisabled = votedItem && votedItem !== option.id;

                    return (
                        <div
                            key={option.id}
                            id={option.id}
                            onClick={() => !isDisabled && thisVote(option.id)}
                            className={`
                                w-1/6 border border-[#26292B] bg-transparent font-mono text-2xl flex flex-wrap 
                                items-center justify-center relative rounded-md cursor-pointer 
                                transition-opacity duration-300 ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                        >
                            <div
                                className="bg-[#DC1867] w-full absolute bottom-0 transition-all duration-1000 rounded-b-md opacity-80"
                                style={{
                                    height: `${votedItem === option.id ? totalVotes(voted[option.id]) : 0}%`,
                                    opacity: `${votedItem === option.id ? 1 : 0}`,
                                }}
                            ></div>
                            <span className="absolute inset-0 flex items-center justify-center">
                                <img className="w-8" src={option.imgSrc} alt="Tier" />
                            </span>
                            <span className="absolute inset-x-0 bottom-0 text-xs text-center">
                                {voted[option.id]} {/* Exibe o número de votos */}
                            </span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

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
            <section className="w-full h-96 my-6 flex flex-wrap">
                <h2 className="w-full flex justify-center font-semibold text-lg">Status</h2>

                {/* Start Toggle */}
                <div className="w-full  flex justify-center ">
                    <label className="inline-flex items-center cursor-pointer ">
                        <span className={`mr-4 ${!isClicked ? "text-[#DC1867]" : "text-[#F5F5F5]"}`}>Lvl. 1</span>
                        <input type="checkbox" value="" className="sr-only peer" onClick={() => setIsClicked(!isClicked)} />
                        <div className="relative w-32 h-1 bg-gray-200 peer-focus:outline-none 
                                 rounded-full  peer-checked:after:translate-x-[7.2rem] 
                                 after:content-['']  after:absolute after:top-[-8px]  after:start-[-3px]  after:bg-white  
                                 after:rounded-full  after:h-5  after:w-5  after:transition-all
                                 peer-checked:bg-gradient-to-r from-[#760D37] to-[#DC1867] peer-checked:after:bg-[#DC1867]" ></div>
                        <span className={`ml-4 ${!isClicked ? "text-[#F5F5F5]" : "text-[#DC1867]"}`}>Lvl. 80</span>
                    </label>
                </div>

                {/* Animated Bar Status */}
                <ul className="w-full">

                    <li className="w-full  flex  justify-between  items-center">
                        <span className="w-1/5  flex  justify-center" >
                            <img src={hearthIcon} alt="Vida" className="w-7  my-2 " />
                        </span>
                        <div className="w-3/5  h-2.5 bg-[#ddddddee] rounded-full">
                            <div className=" h-2.5 bg-gradient-to-r from-[#760D37] to-[#DC1867]  rounded-full  duration-500" style={{ width: `${isClicked ? lifeReturnMax : lifeValue}%` }} ></div>
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
                            <div className=" h-2.5  bg-gradient-to-r from-[#760D37] to-[#DC1867]  rounded-full  duration-500" style={{ width: `${isClicked ? defReturnMax : defValue}%` }} ></div>
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
                            <div className=" h-2.5 bg-gradient-to-r from-[#760D37] to-[#DC1867]  rounded-full  duration-500" style={{ width: `${isClicked ? atkReturnMax : atkValue}%` }} ></div>
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
                            <div className="h-2.5 bg-gradient-to-r from-[#760D37] to-[#DC1867]  rounded-full  duration-500" style={{ width: `${isClicked ? speedReturnMax : speedValue}%` }} ></div>
                        </div>
                        <span className={`w-1/5  flex  justify-center`} >
                            {isClicked ? spdVApiMaxLevel : spdVApi}
                        </span>
                    </li>
                    {/*End Speed Status*/}

                </ul>{/* End Animated Bar Status */}

                {/* Build Recomendada */}
                <div className="w-full flex flex-col justify-center items-center">
                    <h2 className="font-semibold">Build Recomendada</h2>
                    <table className="w-[90%] mt-4">
                        <thead className="">
                            <tr className="border-b border-[#DC1867]" >
                                <th className="font-thin text-sm opacity-50">Ataque</th>
                                <th className="font-thin text-sm opacity-50">Velocidade</th>
                                <th className="font-thin text-sm opacity-50">Taxa Crítica</th>
                                <th className="font-thin text-sm opacity-50">Dano Crítico</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#DC1867]">
                                <th className="font-light text-sm py-1">3000+</th>
                                <th className="font-light text-sm">101+</th>
                                <th className="font-light text-sm">70+</th>
                                <th className="font-light text-sm ">160+</th>
                            </tr>
                        </tbody>
                    </table>
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
            <section className="w-full my-6">
                <div className="w-full  flex flex-col justify-center items-center font-semibold ">

                    <h2>Material de Ascensão</h2>
                    <h3 className="font-thin text-sm mt-3 text-slate-300">Ascensão de Personagem</h3>

                    {/* Ascensão de Personagem */}
                    <ul className="w-auto  mt-2  text-sm  text-gray-200  flex flex-wrap gap-2 justify-center">
                        <li className="p-3 shadow-sm shadow-[#DC1867]  flex  flex-col justify-center items-center  rounded-lg   text-white">

                            <img
                                className="w-12 bg-[#26292b5b] rounded-xl"
                                src="https://www.prydwen.gg/static/870e43dfc2678aeafa118048ba88e372/6766a/104.webp"
                                alt="Material-1"
                            />
                            <span className="pt-1">
                                15x
                            </span>
                        </li>
                        <li
                            className="p-3 shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white"
                            title="algo">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl"
                                src="https://www.prydwen.gg/static/6e1eb8f979512dd9023035621bd0bf4e/6766a/103.webp"
                                alt="Material-2"
                            />
                            <span className="pt-1">
                                15x
                            </span>
                        </li>
                        <li className="p-3  shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl"
                                src="https://www.prydwen.gg/static/335658bcc7714ffc927f658d68f06e3d/6766a/112.webp"
                                alt="Material-3" />
                            <span className="pt-1">
                                15x
                            </span>
                        </li>
                        <li className="p-3  shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
                                src="https://www.prydwen.gg/static/374abdd1e080926aaf2a659e095fa9cb/6766a/41.webp"
                                alt="Material-4" />
                            <span className="pt-1">
                                65x
                            </span>
                        </li>
                        <li className="p-3 shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
                                src="https://www.prydwen.gg/static/5bcaa809090c0284f8d93094f21bdd95/6766a/11.webp"
                                alt="Créditos" />
                            <span className="pt-1">
                                308K
                            </span>
                        </li>
                    </ul>
                    {/* End Ascensão de Personagem */}

                    <h3 className="font-thin text-sm mt-5 text-slate-300">Ascensão de Rastros</h3>

                    {/* Ascensão/Rastros */}
                    <ul className="w-full   mt-2  gap-2  text-sm  text-gray-200  flex flex-wrap justify-center ">
                        <li className="p-3  shadow-sm shadow-[#DC1867]  flex  flex-col justify-center items-center  rounded-lg   text-white">

                            <img
                                className="w-12 bg-[#26292b5b] rounded-xl"
                                src="https://starrail.honeyhunterworld.com/img/item/fiery-spirit-item_icon_35.webp?x34722"
                                alt="Material-1"
                            />
                            <span className="pt-1">
                                18x
                            </span>
                        </li>
                        <li className="p-3  shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white"
                        >
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl"
                                src="https://starrail.honeyhunterworld.com/img/item/starfire-essence-item_icon.webp?x34722"
                                alt="Material-2"
                            />
                            <span className="pt-1">
                                69x
                            </span>
                        </li>
                        <li className="p-3  shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl"
                                src="https://starrail.honeyhunterworld.com/img/item/heaven-incinerator-item_icon.webp?x34722"
                                alt="Material-3" />
                            <span className="pt-1">
                                139x
                            </span>
                        </li>
                        <li className="p-3  shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
                                src="https://starrail.honeyhunterworld.com/img/item/past-evils-of-the-borehole-planet-disaster-item_icon.webp?x34722"
                                alt="Material de Chefe" />
                            <span className="pt-1">
                                12x
                            </span>
                        </li>
                        <li className="p-3   shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
                                src="https://starrail.honeyhunterworld.com/img/item/tracks-of-destiny-item_icon.webp?x34722"
                                alt="Rastro do Destino" />
                            <span className="pt-1">
                                8x
                            </span>
                        </li>
                        <li className="p-3  shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
                                src="https://starrail.honeyhunterworld.com/img/item/dream-collection-component-item_icon.webp?x34722"
                                alt="Material1" />
                            <span className="pt-1">
                                41x
                            </span>
                        </li>
                        <li className="p-3   shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
                                src="https://starrail.honeyhunterworld.com/img/item/dream-flow-valve-item_icon.webp?x34722"
                                alt="Material2" />
                            <span className="pt-1">
                                56x
                            </span>
                        </li>
                        <li className="p-3   shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
                                src="https://starrail.honeyhunterworld.com/img/item/dream-making-engine-item_icon.webp?x34722"
                                alt="Material3" />
                            <span className="pt-1">
                                58x
                            </span>
                        </li>
                        <li className="p-3  shadow-sm shadow-[#DC1867] flex  flex-col justify-center items-center  rounded-lg  text-white">
                            <img
                                className="w-12  bg-[#26292b5b] rounded-xl "
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
            <section className="w-full my-6 flex flex-col justify-center items-center">

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
                        rating={5} // Rank de Estrelas
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
                <div className="w-full flex flex-col justify-center items-center mt-4">
                    <h2 className="mt-2 font-semibold ">Status Recomendados</h2>
                    <table className="w-[90%] mt-4">
                        <thead className="">
                            <tr className="border-b border-[#DC1867] " >
                                <th className="font-thin text-sm opacity-80 py-">
                                    <img className="w-8  mx-auto" src={body} alt="corpo" />
                                </th>
                                <th className="font-thin text-sm opacity-80">
                                    <img className="w-8  mx-auto" src={feet} alt="pés" />
                                </th>
                                <th className="font-thin text-sm opacity-80">
                                    <img className="w-7  mx-auto" src={sphere} alt="esfera" />
                                </th>
                                <th className="font-thin text-sm opacity-80">
                                    <img className="w-7 mx-auto" src={rope} alt="linha" />
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#DC1867] ">
                                <th className="font-extralight text-sm py-1">Dano Crítico</th>
                                <th className="font-extralight text-sm">Velocidade</th>
                                <th className="font-extralight text-sm">Dano de Raio</th>
                                <th className="font-extralight text-sm">Ataque</th>
                            </tr>
                            <tr className="border-b border-[#DC1867]">
                                <th className="font-extralight text-sm py-1">Taxa Crítica</th>
                                <th className="font-extralight text-sm">Ataque</th>
                                <th className="font-extralight text-sm">Ataque</th>
                                <th className="font-extralight text-sm"></th>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className="mt-4 mb-2 font-medium ">Substatus</h2>
                    <table className="w-[90%]">
                        <thead className="">
                            <tr className="border-y border-[#DC1867] " >
                                <th className="font-light text-[13px] py-1">Taxa Crítica</th>
                                <th className="text-[#DC1867]">{'>'}</th>
                                <th className="font-light text-[13px]">Dano Crítico</th>
                                <th className="text-[#DC1867]">{'>'}</th>
                                <th className="font-light text-[13px]">Velocidade</th>
                                <th className="text-[#DC1867]">{'>'}</th>
                                <th className="font-light text-[13px]">Ataque</th>
                               
                            </tr>
                        </thead>
                    </table>
                    <h2 className="mt-4 mb-2 font-medium ">Rastros Menores</h2>
                    <table className="w-[90%]">
                        <thead className="">
                            <tr className="border-b border-[#DC1867] mx-auto" >
                                <th className="font-thin text-sm opacity-80 py-">
                                    Efeito 1
                                </th>
                                <th className="font-thin text-sm opacity-80">
                                    Efeito 2
                                </th>
                                <th className="font-thin text-sm opacity-80">
                                    Efeito 3
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#DC1867] mx-auto">
                                <th className="font-extralight text-sm py-1"> +10% </th>
                                <th className="font-extralight text-sm">+18.7%</th>
                                <th className="font-extralight text-sm">+18%</th>
                            </tr>
                        </tbody>
                    </table>

                    <div className="w-full py-4 px-[5%] flex flex-col items-center gap-2 ">
                        <h2 className="mt-4 mb-2 font-medium">Rastros Maiores</h2>
                        <AccordionItem
                        starPlus="false"
                        isOpenDefault={false} // começa fechado
                        title="Liuren, o Sexagenário" // Define o titulo
                        imageUrl="https://starrail.honeyhunterworld.com/img/trace/liuren-the-sexagenary-trace_icon.webp?x10871"
                        description={[
                            "Se um inimigo-alvo aplicar penalidades de Controle Negativo a aliados enquanto a Matriz de Presciência estiver ativa, todos os aliados resistirão a todas as penalidades de Controle Negativo aplicadas pelo alvo inimigo durante a ação atual. Este efeito só pode ser acionado uma vez. Quando a Matriz de Presciência é reativada, o número de vezes que este efeito pode ser ativado será redefinido."
                        ]} // Descrição Gerals
                        rating={0}
                        />
                        <AccordionItem
                            starPlus="false"
                            isOpenDefault={false} // começa fechado
                            title="Taiyi, o Macrocósmico" // Define o titulo
                            imageUrl="https://starrail.honeyhunterworld.com/img/trace/taiyi-the-macrocosmic-trace_icon.webp?x10871"
                            description={[
                                "Quando a Matriz de Presciência está ativa, Fu Xuan recuperará 20 de Energia extra ao usar sua Perícia"
                            ]} // Descrição Gerals
                            rating={0}
                        />
                        <AccordionItem
                            starPlus="false"
                            isOpenDefault={false} // começa fechado
                            title="Dunjia, o Metamístico" // Define o titulo
                            imageUrl="https://starrail.honeyhunterworld.com/img/trace/dunjia-the-metamystic-trace_icon.webp?x10871"
                            description={[
                                "Quando a Perícia Suprema de Fu Xuan é utilizada, cura todos os aliados em uma quantidade igual a 5% dos PV máximos de Fu Xuan + 133."
                            ]} // Descrição Gerals
                            rating={0}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

// Eidolons
export const Eidolons = () => {

    return(
        <>
            <div className="w-full py-4 px-[5%] flex flex-col items-center gap-2 ">
                <h2 className="mt-4 mb-2 font-medium">Eidolons</h2>
                <AccordionItem
                starPlus="false"
                isOpenDefault={false} // começa fechado
                title="Dominus Pacis" // Define o titulo
                imageUrl="https://starrail.honeyhunterworld.com/img/eidolon/dominus-pacis-eidolon_icon.webp?x10871"
                description={[
                    "O efeito Conhecimento aumenta o DMG CRIT em 30%."
                ]} // Descrição Gerals
                rating={0}
                />
                <AccordionItem
                    starPlus="false"
                    isOpenDefault={false} // começa fechado
                    title="Optimus Felix" // Define o titulo
                    imageUrl="https://starrail.honeyhunterworld.com/img/eidolon/optimus-felix-eidolon_icon.webp?x10871"
                    description={[
                        "Se qualquer membro da equipe for atingido por um golpe mortal enquanto Matrix of Prescience estiver ativo, todos os aliados que foram atingidos por um golpe mortal durante esta ação não serão derrubados, e 70% de seu HP Máx. será imediatamente restaurado. Este efeito pode ser ativado 1 vez por batalha."
                    ]} // Descrição Gerals
                    rating={0}
                />
                <AccordionItem
                    starPlus="false"
                    isOpenDefault={false} // começa fechado
                    title="Apex Nexus" // Define o titulo
                    imageUrl="https://starrail.honeyhunterworld.com/img/eidolon/apex-nexus-eidolon_icon.webp?x10871"
                    description={[
                        "Skill Lv. +2, up to a maximum of Lv. 15.<br>Talent Lv. +2, up to a maximum of Lv. 15."
                    ]} // Descrição Gerals
                    rating={0}
                />
                <AccordionItem
                starPlus="false"
                isOpenDefault={false} // começa fechado
                title="Fortuna Stellaris" // Define o titulo
                imageUrl="https://starrail.honeyhunterworld.com/img/eidolon/fortuna-stellaris-eidolon_icon.webp?x10871"
                description={[
                    "Quando outros aliados sob a Matriz da Presciência são atacados, Fu Xuan regenera 5 de Energia."
                ]} // Descrição Gerals
                rating={0}
                />
                <AccordionItem
                    starPlus="false"
                    isOpenDefault={false} // começa fechado
                    title="Arbiter Primus" // Define o titulo
                    imageUrl="https://starrail.honeyhunterworld.com/img/eidolon/arbiter-primus-eidolon_icon.webp?x10871"
                    description={[
                        "Ultimate Lv. +2, até um máximo de Lv. 15.<br>ATK básico Lv. +1, até um máximo de Lv. 10."
                    ]} // Descrição Gerals
                    rating={0}
                />
                <AccordionItem
                    starPlus="false"
                    isOpenDefault={false} // começa fechado
                    title="Omnia Vita" // Define o titulo
                    imageUrl="https://starrail.honeyhunterworld.com/img/eidolon/omnia-vita-eidolon_icon.webp?x10871"
                    description={[
                        "Uma vez que Matrix of Prescience é ativada, ela manterá uma contagem do total de HP perdido por todos os membros da equipe na batalha atual. O DMG causado pelo Ultimate de Fu Xuan aumentará em 200% dessa contagem de perda de HP.<br>Essa contagem também é limitada a 120% do HP Máximo de Fu Xuan e o valor da contagem será zerado e reacumulado após o Ultimate de Fu Xuan ser usado."
                    ]} // Descrição Gerals
                    rating={0}
                />
            </div>
        </>
    )

}

// Habilidades
export const Skills = () => {

    // Estado no componente pai para armazenar o valor do slider
    const [sliderValues, setSliderValues] = useState({
        atkLevel: 1,
        skillLevel: 1,
        ultimateLevel: 1,
        talentLevel:1,
        techniqueLevel:1,
    });

    // Função que será passada para o componente filho para atualizar o valor
    const handleSliderChange = (key, newValue) => {
        setSliderValues((prevValues) => ({
            ...prevValues,
            [key]: newValue,
        }))
    };

    return(
        <>
            <div className="w-full min-h-32 py-4 px-[5%] flex flex-col items-center gap-3">
                <h2 className="mt-2 font-semibold "> Habilidades </h2>
                {/* ATK BASIC */}
                <div className="w-full">
                    <h2 className="w-full h-auto my-2 flex justify-center bg-[#DC1867] font-semibold rounded-t-lg"> 
                        ATK Básico 
                    </h2>
                    <div className="w-full flex justify-around items-center bg-black">
                        <span className="text-lg h-8 flex justify-center items-center ">Nivel {sliderValues.atkLevel}</span>
                        <div className="h-8 flex justify-center items-center ">
                            <DiscreteSlider valueMax={valores[0].nvlMax} onSliderChange={(newValue) => handleSliderChange("atkLevel", newValue)} />
                        </div>
                    </div>
                    <div className={`w-full min-h-10 flex flex-col bg-[#26292B] rounded-b-xl`}> 
                        <div className="flex justify-between items-center px-2 bg-[#111213]">
                            <span> Ganho de Energia: 20 </span>
                            <span> Quebra: 10</span>
                        </div>
                        <p className="px-1.5 py-0.5">
                            Causa Dano Quântico equivalente a <span className="text-pink-600">{valores[0].A[sliderValues.atkLevel - 1]}%</span> do HP Máximo de FU Xuan a um único inimigo.
                        </p>


                    </div>
                </div>
                {/* SKILL */}
                <div className="w-full">
                    <h2 className="w-full h-auto mt-2 flex justify-center bg-[#DC1867] font-semibold rounded-t-lg"> 
                        Habilidade 
                    </h2>
                    <div className="w-full flex justify-around items-center bg-black">
                        <span className="text-lg h-8 flex justify-center items-center ">Nivel {sliderValues.skillLevel}</span>
                        <div className="h-8 flex justify-center items-center ">
                            <DiscreteSlider valueMax={valores[1].nvlMax} onSliderChange={(newValue) => handleSliderChange("skillLevel", newValue)} />
                        </div>
                    </div>
                    <div className={`w-full min-h-10 flex flex-col bg-[#26292B] rounded-b-xl`}> 
                        <div className="flex justify-between items-center px-2 bg-[#111213]">
                            <span> Ganho de Energia: 30 </span>
                            <span> Quebra: 0</span>
                        </div>
                        <p className="px-1.5 py-0.5">
                            Activates Matrix of Prescience, via which other team members will Distribute <span className="text-pink-600">{valores[1].A}%</span> of the DMG they receive (before this DMG is mitigated by any Shields) to Fu Xuan for <span className="text-pink-600">{valores[1].C}%</span> turn(s).
                            While affected by Matrix of Prescience, all team members gain the Knowledge effect, which increases their respective Max HP by <span className="text-pink-600">{valores[1].D[sliderValues.skillLevel - 1]}% </span>of Fu Xuan's Max HP, and increases CRIT Rate by <span className="text-pink-600">{valores[1].E[sliderValues.skillLevel - 1]}%</span>.
                            When Fu Xuan is knocked down, the Matrix of Prescience will be dispelled.
                        </p>


                    </div>
                </div>
                {/* ULTIMATE */}
                <div className="w-full">
                    <h2 className="w-full h-auto mt-2 flex justify-center bg-[#DC1867] font-semibold rounded-t-lg"> 
                        Ultimamte 
                    </h2>
                    <div className="w-full flex justify-around items-center bg-black">
                        <span className="text-lg h-8 flex justify-center items-center ">Nivel {sliderValues.ultimateLevel}</span>
                        <div className="h-8 flex justify-center items-center ">
                            <DiscreteSlider valueMax={valores[2].nvlMax} onSliderChange={(newValue) => handleSliderChange("ultimateLevel", newValue)} />
                        </div>
                    </div>
                    <div className={`w-full min-h-10 flex flex-col bg-[#26292B] rounded-b-xl`}> 
                        <div className="flex justify-between items-center px-2 bg-[#111213]">
                            <span> Ganho de Energia: 05 </span>
                            <span> Quebra: 20</span>
                        </div>
                        <p className="px-1.5 py-0.5">
                            Causa Dano Quântico equivalente a <span className="text-pink-600">{valores[2].A[sliderValues.ultimateLevel - 1]}%</span> do HP Máximo de FU Xuan a todos os inimigos e 
                            obtém 1 contagem de ativação para o efeito Restauração de HP concedido pelo Talento de Fu Xuan.
                        </p>
                    </div>
                </div>
                {/* TALENT */}
                <div className="w-full">
                    <h2 className="w-full h-auto mt-2 flex justify-center bg-[#DC1867] font-semibold rounded-t-lg"> 
                        Talento 
                    </h2>
                    <div className="w-full flex justify-around items-center bg-black">
                        <span className="text-lg h-8 flex justify-center items-center ">Nivel {sliderValues.talentLevel}</span>
                        <div className="h-8 flex justify-center items-center ">
                            <DiscreteSlider valueMax={valores[3].nvlMax} onSliderChange={(newValue) => handleSliderChange("talentLevel", newValue)} />
                        </div>
                    </div>
                    <div className={`w-full min-h-10 flex flex-col bg-[#26292B] rounded-b-xl`}> 
                        <div className="flex justify-between items-center px-2 bg-[#111213]">
                            <span> Ganho de Energia: 0 </span>
                            <span> Quebra: 0</span>
                        </div>
                        <p className="px-1.5 py-0.5">
                            Causa Dano Quântico equivalente a <span className="text-pink-600">{valores[3].A[sliderValues.talentLevel - 1]}%</span> do HP Máximo de FU Xuan a todos os inimigos e 
                            obtém 1 contagem de ativação para o efeito Restauração de HP concedido pelo Talento de Fu Xuan.
                        </p>
                    </div>
                </div>
                {/* TECHNIQUE */}
                <div className="w-full">
                    <h2 className="w-full h-auto mt-2 flex justify-center bg-[#DC1867] font-semibold rounded-t-lg"> 
                        Técnica 
                    </h2>
                    <div className="w-full flex justify-around items-center bg-black">
                        <span className="text-lg h-8 flex justify-center items-center ">Nivel {sliderValues.techniqueLevel}</span>
                        <div className="h-8 flex justify-center items-center ">
                            <DiscreteSlider valueMax={valores[4].nvlMax} onSliderChange={(newValue) => handleSliderChange("techniqueLevel", newValue)} />
                        </div>
                    </div>
                    <div className={`w-full min-h-10 flex flex-col bg-[#26292B] rounded-b-xl`}> 
                        <div className="flex justify-between items-center px-2 bg-[#111213]">
                            <span> Ganho de Energia: 0 </span>
                            <span> Quebra: 0</span>
                        </div>
                        <p className="px-1.5 py-0.5">
                            Após a Técnica ser usada, todos os membros da equipe recebem uma Barreira, com duração de <span className="text-pink-600">20</span> segundos. Esta Barreira pode bloquear todos os ataques inimigos, 
                            e a equipe não entrará em batalha quando atacada. Entrar em batalha enquanto a Barreira estiver ativa fará com que Fu Xuan ative automaticamente a 
                            Matriz da Preciência no início da batalha, com duração de <span className="text-pink-600">{valores[4].C}</span> turnos.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

//Times
export const Teams = () => {
    return(
        <div className="w-full min-h-32 py-4 px-[5%] flex flex-col items-center font-semibold">
            <div className="w-full min-h-40 flex justify-center items-center flex-wrap">
                <h2 className="w-full flex justify-center">Equipes Recomendadas</h2>
                <img 
                    className="w-28 h-28 my-5"
                    src={exampleprofile} 
                    alt="Character"
                />

            </div>
            <div className="w-full my-2.5 flex ">
                {/* F2P */}
                <div className="w-1/2 min-h-40 flex flex-col items-center">
                    <h2> F2P </h2>
                    <hr className="w-full border-[#26292B] mb-5"/>
                    <div className="flex flex-col items-center font-light">
                        <img 
                            className="w-20 h-20"
                            src={ep1} 
                            alt="Character 1"
                        />
                        <span>Buffer</span>
                    </div>
                    <div className="flex flex-col items-center font-light">
                        <img 
                            className="w-20 h-20"
                            src={ep2} 
                            alt="Character 2"
                        />
                        <span>Escudo</span>
                    </div>
                    <div className="flex flex-col items-center font-light">
                        <img 
                            className="w-20 h-20"
                            src={ep3} 
                            alt="Character 3"
                        />
                        <span>Cura</span>
                    </div>
                </div>
                {/* MELHOR TIME */}
                <div className="w-1/2 min-h-40 flex flex-col items-center">
                    <h2> Melhor Time </h2>
                    <hr className="w-full border-[#26292B] mb-5"/>
                    <div className="flex flex-col items-center font-light">
                        <img 
                            className="w-20 h-20"
                            src={ep4} 
                            alt="Character 4"
                        />
                        <span>Debuffer</span>
                    </div>
                    <div className="flex flex-col items-center font-light">
                        <img 
                            className="w-20 h-20"
                            src={ep5} 
                            alt="Character 5"
                        />
                        <span>Debuffer</span>
                    </div>
                    <div className="flex flex-col items-center font-light">
                        <img 
                            className="w-20 h-20"
                            src={ep6} 
                            alt="Character 6"
                        />
                        <span>Escudo</span>
                    </div>

                </div>
            </div>
            <hr className="w-[95%] border-[#26292B] mb-5" />
            <div className="flex flex-col  gap-5">
                <h2 className="w-full flex justify-center">Outras Opções</h2>
                <AccordionItem
                    starPlus="false"
                    isOpenDefault={false} // começa fechado
                    title="Escudo / Cura" // Define o titulo
                    imageUrl=""
                    description={
                        [
                            <div key="image-description" className="w-72 flex justify-start items-center flex-wrap gap-16 text-white">
                                <img className="w-16 h-16" src={ep9} alt=""/>
                                <h3 className="text-[1rem] font-semibold"> Feixiao </h3>
                            </div>  
                        ,
                            <div key="image-description" className="w-72 flex justify-start items-center flex-wrap gap-16 text-white">
                                <img className="w-16 h-16" src={ep10} alt=""/>
                                <h3 className="text-[1rem] font-semibold"> Seele </h3>
                            </div>  
                        ]
                    } // Descrição Gerals
                    rating={0}
                />
                <AccordionItem
                    starPlus="false"
                    isOpenDefault={false} // começa fechado
                    title="Buff / Debuff" // Define o titulo
                    imageUrl=""
                    description={
                        [
                            <div key="image-description" className="w-72 flex justify-start items-center flex-wrap gap-16 text-white">
                                <img className="w-16 h-16" src={ep7} alt=""/>
                                <h3 className="text-[1rem] font-semibold"> Gepard </h3>
                            </div>
                        ,
                            <div key="image-description" className="w-72 flex justify-start items-center flex-wrap gap-16 text-white">
                                <img className="w-16 h-16" src={ep8} alt=""/>
                                <h3 className="text-[1rem] font-semibold"> Arlan </h3>
                            </div>  
                        ]
                    } // Descrição Gerals
                    rating={0}
                />
            </div>

        </div>
    )
}