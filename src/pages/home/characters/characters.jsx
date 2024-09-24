import SlideCharacter from "../slide-character/slide-character.jsx";
import { useState } from "react";
import { refresh, star, starGold, updateGirl } from "../../../../public/index.js";

const paths = [
	{ id: 1, title: "Abundancia", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsPirest.png" },
	{ id: 2, title: "Caça", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsRogue.png", },
	{ id: 3, title: "Destruição", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsWarrior.png", },
	{ id: 4, title: "Erudição", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsnMage.png", },
	{ id: 5, title: "Harmonia", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsShaman.png", },
	{ id: 6, title: "Inexistência", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsWarlock.png", },
	{ id: 7, title: "Preservação", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsKnight.png", },
];

const elements = [
	{id: 1, title: 'Fisico', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png" },
	{id: 2, title: 'Fogo', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png" },
	{id: 3, title: 'Gelo', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png", },
	{id: 4, title: 'Imaginario', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeImaginary.png" },
	{id: 5, title: 'Quantico', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png" },
	{id: 6, title: 'Raio', image: "https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png"},
	{id: 7, title: 'Vento', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeWind.png" },
]



export default function personagens() {;
	const [filtro, setFiltro] = useState(true);
	const [isClicked, setIsClicked] = useState(true);
    const [selectedPath, setSelectedPath] = useState()


	return (
		<div className="w-full h-auto px-2 pt-4 pb-4 bg-[#111213] flex justify-center text-white font-sans">
			{/* Div do slides de personagens */}
			<div className="
				w-full min-h-72 py-1 px-2 flex flex-col items-center
				rounded-xl overflow-x-hidden border border-[#26292B]
				md:w-4/6
			">
				{/* Title e Data de Atualização*/}
				<div
					className="
                    w-11/12 h-48 my-2 flex items-center border-b border-[#26292B]
                    md-w-full md:h-[10rem] md:flex md:my-2 md:items-center
                ">
				<div className="w-full h-full flex">
					<div className="w-64 flex justify-center items-center">
						<img 
							className="w-32 h-32"
							src={updateGirl} 
							alt=""
						/>
					</div>
					<div className=" w-full flex flex-col justify-center items-start">
						<span className="w-full text-[20px] font-semibold font-sans">Honkai: Star Rail</span>
						<span className="w-full flex">Atualizado: <i className="mx-1 text-[#DC1867]">00/00/2024</i></span>
					</div>
				</div>
				</div>
				{/* Filtros */}
				<div
				
					className="
                    w-full h-32 mt-2 mb-5 py-3 px-6 flex flex-col justify-center items-center gap-1
                    md-w-full md:h-[10rem] md:flex md:my-2 md:items-center
                ">
					<span className="text-[#F5F5F5] opacity-70 font-light">Filtro</span>
					<div 
						id="caminhos"
						className="w-5/6 flex bg-[#26292B] gap-0.5 p-0.5"
					> 
						{paths.map((path) => (
							<div
								key={path}
								className="w-12 h-7 flex justify-center items-center bg-[#111213]"
							>
							<img 
								className="w-8 h-7" 
								src={path.image} alt="" />
							</div>
						))}
					</div>
					
					<div 
						id="elementos"
						className="w-5/6 flex bg-[#26292B] gap-0.5 p-0.5"
					> 
						{elements.map((elem) => (
							<div
								key={elem}
								className="w-12 h-7 flex justify-center items-center bg-[#111213]"
							>
							<img 
								className="w-8 h-7" 
								src={elem.image} alt="" />
							</div>
						))}
					</div>
					{/* Estrelas e reload */}
					<div className="w-auto flex justify-center bg-[#26292B] gap-0.5 p-0.5"> 
						<div className="w-12 h-7 flex justify-center items-center bg-[#111213] text-purple-500">
							4 
							<img className="w-5 px-0.5" src={star} alt="" />
						</div>
						<div
							className="w-12 h-7 flex justify-center items-center bg-[#111213] text-yellow-500 "
						>
							5 <img className="w-5 px-0.5" src={starGold} alt="" />
						</div>
						<div
							className="w-12 h-7 flex justify-center items-center bg-[#111213]"
						>
							<img className="w-6 h-6 " src={refresh} alt="" />
						</div>
					</div>
					
				</div>
				{/* Gerando personagens */}
				<SlideCharacter/>
			</div>
		</div>
	);
}
