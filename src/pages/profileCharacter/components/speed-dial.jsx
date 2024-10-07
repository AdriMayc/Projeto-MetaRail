import { useState } from "react";

export default function SpeedDial() {

    const [isClicked, setIsClicked] = useState(false)

    // Função para rolar até a seção específica
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }else {
            console.error(`Section with ID ${sectionId} not found.`);
          }
    };

    return (

        <div data-dial-init class="fixed end-0.5 bottom-28 group z-20">
            <div 
                id="speed-dial-menu-default" 
                class={`${isClicked ? "" : "invisible translate-y-60 opacity-0 scale-0"} transition duration-150 bg-[#111213]/[0.8] flex flex-col items-center mb-4 p-2 space-y-2 rounded-lg border`}
            >
                <button  type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("perfil")}
                >
                    <span class="underline">Perfil</span>
                </button>
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("tierlist")}
                >
                    <span class="underline">Status</span>
                </button>
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("material")}
                >
                    <span class="underline">Material</span>
                </button>
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("equip")}
                >
                    <span class="underline">Equip.</span>
                </button>
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("equip")}
                >
                    <span class="underline">Rastros</span>
                </button>
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("eidolons")}
                >
                    <span class="underline">Eidolons</span>
                </button>
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("habilidades")}
                >
                    <span class="underline">Habilidades</span>
                </button>
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" class="w-auto h-auto flex justify-center items-center text-[#F5F5F5] hover:text-[#DC1867] "
                    onClick={() => scrollToSection("equipes")}
                >
                    <span class="underline">Equipes</span>
                </button>
                
            </div>
            <button 
                className={`group h-14 w-14 mx-6 rounded-2xl bg-[#111213] border-2 border-white ${isClicked ? "border-[#DC1867]" : ""}`}
                onClick={() => setIsClicked(!isClicked)}
            >
                <div className="grid justify-items-center gap-1.5">
                    <span className={`h-1 w-8 rounded-full bg-white transition duration-150 ${isClicked ? "bg-[#DC1867] translate-y-2.5 rotate-45" : ""}`}></span>
                    <span className={`h-1 w-8 rounded-full bg-white transition duration-0 ${isClicked ? "bg-[#DC1867] scale-x-0" : ""}`}></span>
                    <span className={`h-1 w-8 rounded-full bg-white transition duration-150 ${isClicked ? "bg-[#DC1867] -translate-y-2.5 -rotate-45" : ""}`}></span>
                </div>
            </button>
        </div>    

    )
}