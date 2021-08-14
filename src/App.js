import React, { Component } from "react";
import Header from "./component/header/Header";
import "./App.css";
import Myself from "./component/myself/Myself";
import Social from "./component/social/Social";
import About from "./component/aboutMe/About";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Myself />
				<Social />
				<About />
			</div>
		);
	}
}

export default App;
