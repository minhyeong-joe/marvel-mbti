import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import Constants from "../language";

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
			</div>
		</div>
	);
};

export default Landing;
