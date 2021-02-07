import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

import { LanguageContext } from "../LanguageContext";
import { questions } from "../questions";
import Constants from "../constants";

const Assessment = ({ history }) => {
	const [lang, _] = useContext(LanguageContext);
	const [currentQ, setCurrentQ] = useState(0);
	const [scores, setScores] = useState({ IvsE: 0, SvsN: 0, TvsF: 0, JvsP: 0 });

	const onClickOption = (qtype, score) => {
		setScores({ ...scores, [qtype]: scores[qtype] + score });
		if (currentQ < questions.length - 1) {
			setCurrentQ(currentQ + 1);
		} else {
			const result = computeResult();
			history.push(`/result/${result}`);
		}
	};

	const computeResult = () => {
		let result = "";
		result += scores.IvsE <= 0 ? "i" : "e";
		result += scores.SvsN <= 0 ? "s" : "n";
		result += scores.TvsF <= 0 ? "t" : "f";
		result += scores.JvsP <= 0 ? "j" : "p";
		return result;
	};

	return (
		<>
			<div className="progress">
				<p className="question-counter">
					{currentQ + 1} / {questions.length}
				</p>
				<div className="progress-bar">
					<div
						className="progress-percentage"
						style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
					></div>
				</div>
			</div>
			<div className="question-container" key={currentQ}>
				<h1 className="number">Q.{currentQ + 1}</h1>
				<h2 className="prompt">{questions[currentQ].prompt[lang]}</h2>
				<div className="options-container">
					<button
						className="option-btn btn"
						onClick={() =>
							onClickOption(
								questions[currentQ].type,
								questions[currentQ].optionA.score
							)
						}
					>
						{questions[currentQ].optionA[lang]}
					</button>
					<button
						className="option-btn btn"
						onClick={() =>
							onClickOption(
								questions[currentQ].type,
								questions[currentQ].optionB.score
							)
						}
					>
						{questions[currentQ].optionB[lang]}
					</button>
				</div>
			</div>

			<Link to="/" className="btn btn-secondary btn-rounded btn-menu">
				<TiArrowBack />
				{Constants.backToMenu[lang]}
			</Link>
		</>
	);
};

export default Assessment;
