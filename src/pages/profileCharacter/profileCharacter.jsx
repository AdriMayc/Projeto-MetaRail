import { Introdution, TierList, Status, Materials, Equipments } from "./components/functions";
const profileCharacter = () => {

    return (
        <body className="pt-12  bg-[#111213]  overflow-y-hidden text-white ">
            <div className=" h-full w-auto my-5 mx-5  bg-[#111213] border border-[#26292B] flex flex-col  items-center  rounded-[1.7rem]"> 

                <Introdution />
                <hr className="w-[95%] border-[#26292B] " />
                <TierList />
                <hr className="w-[95%] border-[#26292B] " />
                <Status />
                <hr className="w-[95%] border-[#26292B] " />
                <Materials />
                <hr className="w-[95%] border-[#26292B] " />
                <Equipments />
                <hr className="w-[95%] border-[#26292B] " />

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