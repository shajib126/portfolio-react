import React from "react";
import Button from "../button/Button";
import Typewriter from "typewriter-effect";
import "./Myself.css";

const Myself = () => {
	return (
		<div className="myself">
			<h4>Hi, my name is</h4>
			<h1>
				<Typewriter
					options={{
						strings: ["Abu Zubaer"],
						autoStart: true,
						loop: true,
					}}
				/>
			</h1>

			<h2>I am React Developer</h2>
			<p>I'm frontend web developer from bangladesh</p>
			<Button name="Get in Touch" />
		</div>
	);
};

export default Myself;
