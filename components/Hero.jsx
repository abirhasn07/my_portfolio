import Image from 'next/image';
import abir from '../public/abir_hasan.png';
const Hero = () => {
	return (
		<div className="lg:w-[90%] mx-auto flex flex-wrap justify-between items-center mt-[50px] pb-[100px] min-h-[85vh]">
			<div className="w-[65%]">
				<h1 className="text-6xl font-black text-accent capitalize leading-[110%]">
					<span className="block">Hey stranger 👋</span>
					<span>I’m Abir hasan </span>
				</h1>
				<p className="text-base w-[75%] mb-4">
					I’m a frontend engineer, passionate about digital products that help
					people experience everyday life, not endure it
				</p>
				<div className="flex gap-8">
					<button className=" bg-secondary min-w-[220px] py-2 px-2 rounded text-[26px] text-white hover:bg-transparent border-[1px] hover:border-accent hover:text-accent duration-200">
						My Works 💼
					</button>
					<button
						className=" bg-transparent min-w-[220px] py-2 
                    px-2 rounded text-[26px] text-accent border-[1px] border-accent hover:bg-secondary
                    hover:text-white duration-200 hover:border-secondary delay-100
                    "
					>
						Resume 📄
					</button>
				</div>
			</div>
			<div className="w-[30%]">
				<Image
					src={abir}
					alt="portrait of abirhasan"
					className="w-[420px] object-cover"
				/>
			</div>
		</div>
	);
};

export default Hero;
