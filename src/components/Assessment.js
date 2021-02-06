import React, { useContext, useState } from "react";

import { LanguageContext } from "../LanguageContext";
import { questions } from "../questions";

const Assessment = () => {
	const [lang, setLang] = useContext(LanguageContext);
	const [currentQ, setCurrentQ] = useState(0);
	const [scores, setScores] = useState({ IvsE: 0, SvsN: 0, TvsF: 0, JvsP: 0 });
	console.log(questions);
	return (
		<>
			<p className="question-counter">
				{currentQ + 1} / {questions.length}
			</p>
			<div className="question-container">
				<h1 className="number">Q.{currentQ + 1}</h1>
				<h2 className="prompt">{questions[currentQ].prompt[lang]}</h2>
				<div className="options-container">
					<button className="option-btn btn">
						{questions[currentQ].optionA[lang]}
					</button>
					<button className="option-btn btn">
						{questions[currentQ].optionB[lang]}
					</button>
				</div>
			</div>
		</>
	);
};

export default Assessment;
