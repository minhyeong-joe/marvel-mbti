import React, { useContext } from "react";

import { LanguageContext } from "../LanguageContext";
import { results } from "../results";

const Result = ({ match }) => {
	const [lang, setLang] = useContext(LanguageContext);
	const { mbti } = match.params;
	const marvelChar = results[mbti];
	return <div>{marvelChar.name[lang]}</div>;
};

export default Result;
