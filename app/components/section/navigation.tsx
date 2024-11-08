"use client";
import Image from "next/image";
import Button from "../button";

const Navigation = () => {
	return (
		<div className="flex h-full flex-row justify-between items-center w-full py-2">
			<div className="flex flex-row gap-8 md:gap-16 items-center font-semibold">
				<a href="#about">
					<img src="/logo.svg" alt="logo" width={100} height={38} />
				</a>
				<a href="#product" className="underline-animation">
					About
				</a>
				<a href="#projects" className="underline-animation">
					Projects
				</a>
				<a href="#events" className="underline-animation">
					Events
				</a>
			</div>
			<Button
				text={"Join us"}
				onClick={() => {
					window.open(
						"https://airtable.com/app2OPYvNaoWHBYhg/pagQHtwSIRuWhV4L8/form",
						"_blank"
					);
				}}
				color="primary"
				classname="text-base invisible  md:visible"
			/>
		</div>
	);
};
export default Navigation;
