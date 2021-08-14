import React from "react";
import "./About.css";
const About = () => {
	return (
		<div className="about" id="about">
			<div className="about_me">
				<h1>About Me</h1>
			</div>
			<div className="about_me_detail">
				<div className="about_me_paragraph">
					<p>Hello! My Name is Abu zubaer and I am frontend Developer</p>
					<p>My Interested in web MERN stack web developement. </p>
					<p>I've started since 2014. When i saw interactive Web App</p>
					<p>After that i decide to I want to be Web developer.</p>
					<p>Then I start learning HTML and then CSS.</p>
					<p>Where From my Learning Start.</p>
					<p>I love to learn</p>
					<h4>Here are few technologies I've been working with recently : </h4>
					<div className="skill_tech">
						<ol>
							<li>Javascript</li>

							<li>Node.Js</li>
							<li>Express</li>
						</ol>
						<ol>
							<li>React js</li>
							<li>Bootstrap</li>
							<li>Sass</li>
						</ol>
					</div>
				</div>
				<div className="about_me_photId">
					<img
						src="https://res.cloudinary.com/practicaldev/image/fetch/s--K5bXa_7r--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/538928/62392426-1ebc-473c-a685-a3e716fcd06a.jpeg"
						alt=""
					/>
				</div>
			</div>
			<div className="online_judge">
				<h2>I Love solve problem. : --</h2>
				<h3>I've solve some programming problem in online judge --</h3>
				<div className="group-btn">
					<button>
						<a href="https://www.urionlinejudge.com.br/judge/en/profile/208337">
							URI
						</a>
					</button>
					<button>
						<a href="https://www.hackerrank.com/shajib126">HACKERRANK</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
