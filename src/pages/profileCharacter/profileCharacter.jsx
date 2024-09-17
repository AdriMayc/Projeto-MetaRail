import { Introdution, TierList, Status, Materials, Equipments } from "./components/functions";

const profileCharacter = () => {

    return (
        <body className="pt-12  bg-[#2C252B]  overflow-y-hidden text-white ">
            <div className=" h-full w-auto m-6  bg-[#413F54]  flex flex-col  items-center  rounded-[1.7rem]"> 

                <Introdution />
                <TierList />
                <hr className="w-full" />
                <Status />
                <hr className="w-full" />
                <Materials />
                <hr className="w-full" />
                <Equipments />
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