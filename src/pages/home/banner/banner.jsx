import { welcome } from "../../../../public/index.js";

export default function Banner() {
	return (
		<div 
            className={`
                w-full h-60 mt-[25px]  bg-cover
                md:w-full md:h-[30rem] 
            `}
            style={{backgroundImage:`url(${welcome})`}}
            >
			<div 
            className="w-full h-full bg-black/[0.1] flex flex-col justify-center items-center text-white">
				<h1 className="text-5xl font-semibold">
                    Bem Vindo
                </h1>
                <h3 className="text-sm font-medium">User 01</h3>
			</div>
		</div>
	);
}
