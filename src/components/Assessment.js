import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";

import { LanguageContext } from "../LanguageContext";
import { questions } from "../questions";
import Constants from "../constants";
import ProgressBar from "./ProgressBar";
import "../styles/assessment.scss";

const Assessment = ({ history }) => {
	const [lang, _] = useContext(LanguageContext);
	const [currentQ, setCurrentQ] = useState(0);
	const [scores, setScores] = useState({ IvsE: 0, SvsN: 0, TvsF: 0, JvsP: 0 });
	const [choices, setChoices] = useState([]);

	useEffect(() => {
		const computeResult = () => {
			let result = "";
			result += scores.IvsE <= 0 ? "i" : "e";
			result += scores.SvsN <= 0 ? "s" : "n";
			result += scores.TvsF <= 0 ? "t" : "f";
			result += scores.JvsP <= 0 ? "j" : "p";
			return result;
		};
		if (currentQ >= questions.length) {
			const result = computeResult();
			(async () => {
				await axios.post(Constants.backendUrl, {
					result: result,
					choices: choices,
				});
			})();
			history.push(`/result/${result}`);
		}
	}, [choices, currentQ, history, scores]);

	const onClickOption = (qtype, score, option) => {
		setScores({ ...scores, [qtype]: scores[qtype] + score });
		setChoices([...choices, option]);
		setCurrentQ(currentQ + 1);
	};

	return (
		<>
			<ProgressBar current={currentQ} total={questions.length} />
			{currentQ < questions.length && (
				<div className="question-container" key={currentQ}>
					<h1 className="number">Q.{currentQ + 1}</h1>
					<h2 className="prompt">{questions[currentQ].prompt[lang]}</h2>
					<div className="options-container">
						<button
							className="option-btn btn"
							onClick={() =>
								onClickOption(
									questions[currentQ].type,
									questions[currentQ].optionA.score,
									0
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
									questions[currentQ].optionB.score,
									1
								)
							}
						>
							{questions[currentQ].optionB[lang]}
						</button>
					</div>
				</div>
			)}

			<Link to="/" className="btn btn-secondary btn-rounded btn-menu">
				<TiArrowBack />
				{Constants.backToMenu[lang]}
			</Link>
		</>
	);
};

export default Assessment;
