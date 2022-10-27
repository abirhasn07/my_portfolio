import Image from 'next/image';
import abir from '../public/abir_hasan.png';
const Hero = () => {
	return (
		<div className="lg:w-[90%] mx-auto flex flex-wrap justify-between items-center mt-[50px] pb-[100px] min-h-[85vh] lg:flex-row flex-col-reverse md:flex-row md:min-h-fit">
			<div className="lg:w-[65%] w-full text-center lg:text-left mx-auto mt-8 md:w-[55%] md:text-left">
				<h1 className="text-3xl lg:text-6xl font-black text-accent capitalize leading-[110%] md:w-[90%] mx-auto lg:w-full">
					<span className="block">Hey There👋</span>
					<span>I’m Abir hasan </span>
				</h1>
				<p className="text-sm lg:text-base w-[90%] mx-auto lg:w-full my-4">
					I’m a frontend engineer, passionate about digital products that help
					people experience everyday life, not endure it
				</p>
				<div
					className=" lg:w-[60%] w-[90%]  lg:ml-0 mx-auto flex gap-0 flex-wrap justify-between items-center flex-row 
				"
				>
					<button
						className=" basis-[48%] border-secondary
					 border-[1px] bg-secondary px-4 text-sm rounded text-white py-[8px]"
					>
						My Works💼
					</button>
					<button className="basis-[48%] border-accent bg-transparent border-[1px] px-4 text-sm rounded text-accent py-[8px]">
						Resume 📄
					</button>
				</div>
			</div>
			<div className=" lg:w-[30%] w-[90%] md:w-[40%]">
				<Image
					src={abir}
					alt="portrait of abirhasan"
					className="w-[90%] mx-auto object-cover lg:rounded-[30px] rounded-[500px] border-[15px] h-[400px] border-accent md:rounded-none md:border-0"
				/>
			</div>
		</div>
	);
};

export default Hero;
