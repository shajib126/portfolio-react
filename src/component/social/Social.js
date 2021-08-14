import React, { Component } from "react";
import SocialList from "./SocialList";
import "./Social.css";

class Social extends Component {
	state = {
		socials: [
			{
				icon: "https://img.pngio.com/github-logo-icon-of-glyph-style-available-in-svg-png-eps-ai-github-icon-png-256_256.png",
				proLink: "https://github.com/shajib126",
			},
			{
				icon: "https://www.designbust.com/download/171/png/instagram_logo_color_icon256.png",
				proLink: "https://www.instagram.com/jubaerabu/",
			},
			{
				icon: "http://assets.stickpng.com/images/58e91965eb97430e819064f5.png",
				proLink: "https://www.facebook.com/abu.jubaer.792",
			},
			{
				icon: "https://www.freeiconspng.com/thumbs/linkedin-logo-png/webtreatsetc-blue-jelly-linkedin-logo-19.png",
				proLink: "https://www.linkedin.com/in/abu-zubaer-0044b0118/",
			},
		],
	};
	render() {
		return (
			<div className="social">
				{this.state.socials.map((social) => (
					<SocialList icon={social.icon} proLink={social.proLink} />
				))}
			</div>
		);
	}
}

export default Social;
