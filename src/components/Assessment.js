import React, { useContext } from "react";

import { LanguageContext } from "../LanguageContext";
import { questions } from "../questions";

const Assessment = () => {
	const [lang, setLang] = useContext(LanguageContext);
	console.log(questions);
	return <div>Assessment</div>;
};

export default Assessment;
