import React, { useContext } from "react";

import { LanguageContext } from "../LanguageContext";
import Constants from "../constants";

const CharacterDetail = ({ character }) => {
	const [lang, _] = useContext(LanguageContext);

	return (
		<>
			<h2 className="adj">{character.adj[lang]}</h2>
			<h2 className="job">{character.job[lang]}</h2>
			<img
				className="main-image"
				src={character.image_url}
				alt={`${character.name[lang]}`}
			/>
			<h3 className="name">{character.name[lang]}</h3>
			<div className="description-container">
				<h3 className="description-header">{Constants.description[lang]}</h3>
				<p>{character.description[lang]}</p>
			</div>
		</>
	);
};

export default CharacterDetail;
