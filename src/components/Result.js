import React, { useContext } from "react";

import Constants from "../language";

import { LanguageContext } from "../LanguageContext";
import { results } from "../results";

import images from "../assets";

const Result = ({ match }) => {
	const [lang, setLang] = useContext(LanguageContext);
	const { mbti } = match.params;
	const marvelChar = results[mbti];
	return (
		<div className="result-container">
			<h2 className="adj">{marvelChar.adj[lang]}</h2>
			<h2 className="job">{marvelChar.job[lang]}</h2>
			<img
				className="main-image"
				src={images[mbti].default}
				alt={`${marvelChar.name[lang]}`}
			/>
			<h3 className="name">{marvelChar.name[lang]}</h3>
			<div className="description-container">
				<h3 className="description-header">{Constants.description[lang]}</h3>
				<p>{marvelChar.description[lang]}</p>
			</div>
		</div>
	);
};

export default Result;
