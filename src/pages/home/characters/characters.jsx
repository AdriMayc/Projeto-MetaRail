import SlideCharacter from "../slide-character/slide-character.jsx";
import { useState } from "react";
import { refresh, star, starGold, updateGirl } from "../../../../public/index.js";

const paths = [
	{ id: 1, title:"Abundance", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsPirest.png" },
	{ id: 2, title:"The Hunt", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsRogue.png", },
	{ id: 3, title:"Destruction", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsWarrior.png", },
	{ id: 4, title:"Erudition", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsnMage.png", },
	{ id: 5, title:"Harmony", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsShaman.png", },
	{ id: 6, title:"Nihility", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsWarlock.png", },
	{ id: 7, title:"Preservation", image: "https://raw.githubusercontent.com/FortOfFans/HSR/main/spriteoutput/avatarprofessiontattoo/profession/BgPathsKnight.png", },
];

const elements = [
	{id: 1, title:'Physical', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributePhysical.png" },
	{id: 2, title:'Fire', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeFire.png" },
	{id: 3, title:'Ice', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeIce.png", },
	{id: 4, title:'Imaginary', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeImaginary.png" },
	{id: 5, title:'Quantum', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeQuantum.png" },
	{id: 6, title:'Lightning', image: "https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeThunder.png"},
	{id: 7, title:'Wind', image:"https://api.yatta.top/hsr/assets/UI/attribute/IconAttributeWind.png" },
]



export default function personagens() {

	const [selectedPath, setSelectedPath] = useState([]);
  	const [selectedElem, setSelectedElem] = useState([]);
  	const [selectedStar, setSelectedStar] = useState([]);

	// Função para adicionar/remover path
	const handlePathClick = (pathTitle) => {
		setSelectedPath((prevSelected) => 
		  Array.isArray(prevSelected)
			? (prevSelected.includes(pathTitle)
				? prevSelected.filter((path) => path !== pathTitle) // Remove se já estiver selecionado
				: [...prevSelected, pathTitle]) // Adiciona se não estiver selecionado
			: [] // Se prevSelected não for um array por algum motivo
		);
	  };
	  
	  const handleElemClick = (elemTitle) => {
		setSelectedElem((prevSelected) => 
		  Array.isArray(prevSelected)
			? (prevSelected.includes(elemTitle)
				? prevSelected.filter((elem) => elem !== elemTitle) // Remove se já estiver selecionado
				: [...prevSelected, elemTitle]) // Adiciona se não estiver selecionado
			: [] // Se prevSelected não for um array por algum motivo
		);
	  };
	  const handleStarClick = (starNumber) => {
		setSelectedStar((prevSelected) => 
		  Array.isArray(prevSelected)
			? (prevSelected.includes(starNumber)
				? prevSelected.filter((star) => star !== starNumber) // Remove se já estiver selecionado
				: [...prevSelected, starNumber]) // Adiciona se não estiver selecionado
			: [] // Se prevSelected não for um array por algum motivo
		);
	  };
	  

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
                    w-full h-48 my-2 flex items-center border-b border-[#26292B]
                    md-w-full md:h-[10rem] md:flex md:my-2 md:items-center
                ">
				<div className="w-full h-full flex md:flex md:justify-center md:items-center">
					<div className="w-64 flex justify-center items-center">
						<img 
							className="w-32 h-32"
							src={updateGirl} 
							alt="Imagem de uma personagem"
						/>
					</div>
					<div className=" w-full flex flex-col justify-center items-start md:w-80 md:border">
						<span className="w-full text-[20px] font-semibold font-sans">Honkai: Star Rail</span>
						<span className="w-full flex">Atualizado: <i className="mx-1 text-[#DC1867]">00/00/2024</i></span>
					</div>
				</div>
				</div>
				{/* Filtros */}
				<div
				
					className="
                    w-full h-32 mt-2 mb-5 py-3 px-6 flex flex-col justify-center items-center gap-1
                    md-w-full md:h-[10rem] md:flex md:flex-row md:flex-wrap md:my-2 md:items-center
                ">
					<span className="
						text-[#F5F5F5] opacity-70 font-light
						md:w-full md:flex md:justify-center md:text-2xl
					">
						Filtro
					</span>
					<div 
						id="caminhos"
						className="
							w-full flex bg-[#26292B] gap-0.5 p-0.5
							md:w-auto
						"
					> 
						{paths.map((path) => (
							<div
								key={path.title}
								className={`w-12 h-8 md:w-14 md:h-12 flex justify-center items-center bg-[#111213] ${selectedPath.includes(path.title) ? "border-2 border-[#DC1867]" : ""}`}
								
							>
							<img 
								className="w-8 h-8 cursor-pointer md:w-12 md:h-12" 
								src={path.image} 
								alt={path.title}
								onClick={() => handlePathClick(path.title)}
								/>
							</div>
						))}
					</div>
					
					<div 
						id="elementos"
						className="
							w-full flex bg-[#26292B] gap-0.5 p-0.5
							md:w-auto
						"
					> 
						{elements.map((elem) => (
							<div
								key={elem.title}
								className={`w-12 h-8 md:w-14 md:h-12 flex justify-center items-center bg-[#111213] ${selectedElem.includes(elem.title) ? "border-2 border-[#DC1867]" : ""}`}
								
							>
							<img 
								className="w-8 h-8 cursor-pointer md:w-12 md:h-12" 
								src={elem.image} 
								alt={elem.title}
								onClick={() => handleElemClick(elem.title)}
								/>
							</div>
						))}
					</div>
					{/* Estrelas e reload */}
					<div className="w-auto flex justify-center bg-[#26292B] gap-0.5 p-0.5"> 
						<div 
							className={`
								w-12 h-7 flex justify-center items-center bg-[#111213] text-purple-500 cursor-pointer ${selectedStar.includes(4) ? "border-2 border-[#DC1867]" : ""}
								md:w-12 md:h-12 px-3 md:flex md:justify-center md:items-center
							`}
							onClick={() => handleStarClick(4)}	
						>
							<span className="md:text-2xl">4</span>
							<img 
								className="w-4 px-0.5 md:w-7 md:h-7" 
								src={star} 
								alt="4 Estrelas"
								
							/>
						</div>
						<div
							className={`
								w-12 h-7 flex justify-center items-center bg-[#111213] text-yellow-500 cursor-pointer ${selectedStar.includes(5) ? "border-2 border-[#DC1867]" : ""}
								md:w-12 md:h-12 px-3 md:flex md:justify-center md:items-center
							`}
							onClick={() => handleStarClick(5)}	
						>
							<span className="md:text-2xl">5</span>
							<img 
								className="w-4 px-0.5 md:w-7 md:h-7" 
								src={starGold} 
								alt="5 Estrelas" 

							/>
						</div>
						<div
							className="w-12 h-7 flex justify-center items-center bg-[#111213] md:w-12 md:h-12"
							
						>
							<img 
								className="w-5 h-5 cursor-pointer hover:opacity-70 md:w-6 md:h-6" 
								src={refresh} 
								alt=""
								onClick={() => { setSelectedPath([]); setSelectedElem([]); setSelectedStar([]); }} 
								/>
						</div>
					</div>
					
				</div>
				{/* Gerando personagens */}
				<SlideCharacter selectedPath={selectedPath} selectedElem={selectedElem} selectedStar={selectedStar}/>
			</div>
		</div>
	);
}