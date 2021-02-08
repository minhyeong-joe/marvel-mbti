import React, { useContext } from "react";

import CharacterDetail from "./CharacterDetail";
import { LanguageContext } from "../LanguageContext";
import { results } from "../results";
import Constants from "../constants";
import "../styles/relation.scss";

const Relation = ({ match, history }) => {
	const [lang, _] = useContext(LanguageContext);
	const { relation, mbti } = match.params;
	const marvelChar = results[mbti];
	const header =
		relation === "good"
			? Constants.goodRelationHeader[lang]
			: Constants.badRelationHeader[lang];
	const backgroundColor = relation === "good" ? "skyblue" : "lightcoral";

	return (
		<div className="result-container">
			<h2
				className="relation-header"
				style={{ backgroundColor: backgroundColor }}
			>
				{header}
			</h2>
			<CharacterDetail character={marvelChar} />
			<button
				className="btn btn-secondary btn-back"
				onClick={() => history.goBack()}
			>
				{Constants.goBack[lang]}
			</button>
		</div>
	);
};

export default Relation;
