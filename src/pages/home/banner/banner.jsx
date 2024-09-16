export default function Banner() {
	return (
		<div 
            className="
                w-full h-40 bg-[url('./public/Welcome.jpg')] bg-cover
                md:w-full md:h-[30rem] 
            ">
			<div 
            className="w-full h-full bg-black/[0.5] flex justify-center items-center text-white">
				<h1 className="text-5xl font-semibold">
                    Welcome
                </h1>
			</div>
		</div>
	);
}
