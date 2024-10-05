import { Introdution, TierList, Status, Materials, Equipments, Eidolons, Skills, Teams } from "./components/functions";
import SpeedDial from "./components/speed-dial";
const profileCharacter = () => {

    return (
        <body className="pt-12  bg-[#111213]  overflow-y-hidden text-white ">
            <div className="relative h-full w-auto my-5 mx-5  bg-[#111213] border border-[#26292B] flex flex-col  items-center  rounded-[1.7rem]"> 

                <hr id="perfil" className="w-[95%] border-[#26292B] " />
                <Introdution />
                <hr id="tierlist" className="w-[95%] border-[#26292B] " />
                <TierList/>
                <hr id="status" className="w-[95%] border-[#26292B] " />
                <Status />
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
                <hr className="w-[95%] border-[#26292B] " />
                <SpeedDial />
            </div>
        </body>
    )
}

export default profileCharacter;