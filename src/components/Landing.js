import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import Constants from "../language";
import images from "../assets";

const Landing = () => {
	const [lang, setLang] = useContext(LanguageContext);
	console.log(lang);
	return (
		<div className="landing">
			<p
				className="sub-title"
				dangerouslySetInnerHTML={{ __html: Constants.appSubTitle[lang] }}
			></p>
			<h1
				className="app-title"
				dangerouslySetInnerHTML={{ __html: Constants.appName[lang] }}
			></h1>
			<div className="btn-container">
				<Link to="/assessment" className="btn btn-primary start-btn">
					{Constants.start[lang]}
				</Link>
				<button className="btn btn-secondary">{Constants.share[lang]}</button>
				<img
					src={images.captain_america.default}
					alt="captain_america"
					className="landing-image cap_america"
				/>
				<img
					src={images.ironman.default}
					alt="ironman"
					className="landing-image ironman"
				/>
			</div>
		</div>
	);
};

export default Landing;
