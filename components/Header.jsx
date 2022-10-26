import Image from 'next/image';
import { useState } from 'react';
import logo from '../public/Logo.png';
function Header() {
	const [menu, setMenu] = useState(false);
	return (
		<header>
			<div className="flex lg:w-[90%] mx-auto items-center justify-between py-4 w-[80%]">
				<div className="lg:w-[10%]">
					<Image src={logo} alt="abir hasan" height={55} width={55} />
				</div>

				<ul className=" hidden lg:flex lg:w-[55%] justify-center gap-4 text-accent">
					<li className="text-base font-medium cursor-pointer hover:opacity-80 duration-150">
						about
					</li>
					<li className="text-base font-medium cursor-pointer hover:opacity-80 duration-150">
						my work
					</li>
					<li className="text-base font-medium cursor-pointer hover:opacity-80 duration-150">
						contact me
					</li>
				</ul>
				<div className="w-[20%]">
					<button className=" text-base hidden lg:flex items-center justify-center bg-secondary min-w-[180px] py-[5px] font-medium text-white rounded hover:bg-accent duration-200">
						Lets Talk
						<svg
							width="30"
							height="30"
							viewBox="0 0 40 40"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M35.2384 4.69531L20.0003 19.9963M25.7146 35.2382L20.0003 19.9963L6.66699 14.2858L35.2384 4.76198L25.7146 35.2382Z"
								stroke="white"
								strokeWidth="2.38095"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				{/* mobile menu  */}
				<div className="lg:hidden">
					{menu ? (
						<div onClick={() => setMenu((prev) => !prev)}>
							<svg
								width="25"
								height="25"
								viewBox="0 0 34 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.41699 2.41699L31.5837 31.5837"
									stroke="#222222"
									strokeWidth="4.5"
									strokeLinecap="round"
								/>
								<path
									d="M2.41699 31.5837L31.5837 2.41699"
									stroke="#222222"
									strokeWidth="4.5"
									strokeLinecap="round"
								/>
							</svg>
						</div>
					) : (
						<div onClick={() => setMenu((prev) => !prev)}>
							<svg
								width="35"
								height="20"
								viewBox="0 0 35 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line
									x1="11.5"
									y1="1.5"
									x2="33.5"
									y2="1.5"
									stroke="#22272E"
									strokeWidth="3"
									strokeLinecap="round"
								/>
								<line
									x1="1.5"
									y1="10.5"
									x2="33.5"
									y2="10.5"
									stroke="#22272E"
									strokeWidth="3"
									strokeLinecap="round"
								/>
								<line
									x1="11.5"
									y1="18.5"
									x2="33.5"
									y2="18.5"
									stroke="#22272E"
									strokeWidth="3"
									strokeLinecap="round"
								/>
							</svg>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
