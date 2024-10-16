import { Introdution, TierList, Status, Materials, Equipments, Eidolons, Skills, Teams } from "./components/functions";
import SpeedDial from "./components/speed-dial";
const profileCharacter = () => {

    return (
        <body className="pt-24  bg-[#111213]  overflow-y-hidden text-white ">
            <div className="relative h-full w-auto my-5  bg-[#111213] border border-[#26292B] flex flex-col  items-center  rounded-[1.7rem]">

                <div className="flex flex-col md:flex md:flex-row  md:w-full">
                   <Introdution />
                    <hr id="tierlist" className="w-[95%] md:hidden border-[#26292B] " />
                    <div className="md:hidden"><TierList /></div>
                    <Status />
                </div>
                
                <hr id="status" className="w-[95%] border-[#26292B] " />
                <TierList />
                <hr id="status" className="w-[95%] border-[#26292B] " />
                
                <hr id="material" className="w-[95%] border-[#26292B] " />
                <Materials />
                <hr id="equip" className="w-[95%] border-[#26292B] " />
                <Equipments />
                <hr id="eidolons" className="w-[95%] border-[#26292B] " />
                <Eidolons />
                <hr id="habilidades" className="w-[95%] border-[#26292B] " />
                <Skills />
                <hr id="equipes" className="w-[95%] border-[#26292B] " />
                <Teams />

                <SpeedDial />
            </div>
        </body>
    )
}

export default profileCharacter;