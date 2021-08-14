import React from "react";
import "./SocialList.css";

const SocialList = ({ icon, proLink, border }) => {
	return (
		<div className="social_list">
			<a href={proLink}>
				<img src={icon} alt="" />
			</a>
		</div>
	);
};

export default SocialList;
