export default function Banner() {
	return (
		<div 
            className="
                w-full h-40 bg-[url('./public/welcome.jpg')] bg-cover border-b-2 border-[#DC1867]
                md:w-full md:h-[30rem] 
            ">
			<div 
            className="w-full h-full bg-black/[0.5] flex flex-col justify-center items-center text-white">
				<h1 className="text-5xl font-semibold">
                    Bem Vindo
                </h1>
                <h3 className="text-sm font-medium">User 01</h3>
			</div>
		</div>
	);
}
