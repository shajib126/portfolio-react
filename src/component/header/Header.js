import React from "react";
import Button from "../button/Button";
import text from "./test.txt";
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<h1>Z</h1>
			</div>
			<div className="list-menu">
				<ol>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="">Experience</a>
					</li>
					<li>
						<a href="">Work</a>
					</li>
					<li>
						<a href="">Contact</a>
					</li>
					<a href={text} download="test.txt">
						<Button name="Resume" />
					</a>
				</ol>
			</div>
		</div>
	);
};

export default Header;
