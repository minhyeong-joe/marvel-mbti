import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";

import Constants from "../constants";
import { LanguageContext } from "../LanguageContext";
import { results } from "../results";
import Share from "./Share";
import CharacterDetail from "./CharacterDetail";
import "../styles/result.scss";

const Result = ({ match }) => {
	const [lang, _] = useContext(LanguageContext);
	const [totalCount, setTotalCount] = useState(null);
	const [count, setCount] = useState(null);
	const { mbti } = match.params;
	const marvelChar = results[mbti];

	useEffect(() => {
		(async () => {
			const { data: all } = await axios.get(Constants.backendUrl);
			const { data: specific_mbti } = await axios.get(
				`${Constants.backendUrl}/${mbti}`
			);
			setTotalCount(all.count);
			setCount(specific_mbti.count);
		})();
	}, [count, mbti, setCount]);

	return (
		<div className="result-container">
			<CharacterDetail character={marvelChar} />
			<div className="relations-container">
				<div className="good relation-container">
					<h3 className="header">{Constants.goodWith[lang]}</h3>
					<div className="good relation-box">
						{marvelChar.good_relation.map((good) => {
							return (
								<Link to={`/relation/good/${good}`} key={good}>
									<img
										src={results[good].image_url}
										className="relation-image"
										alt={good}
									/>
								</Link>
							);
						})}
					</div>
				</div>
				<div className="bad relation-container">
					<h3 className="header">{Constants.badWith[lang]}</h3>
					<div className="bad relation-box">
						{marvelChar.bad_relation.map((bad) => {
							return (
								<Link to={`/relation/bad/${bad}`} key={bad}>
									<img
										src={results[bad].image_url}
										className="relation-image"
										alt={bad}
									/>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			{count !== null && totalCount !== null && (
				<p className="percentage">
					<span>
						<span className="percent-num">
							{((count / totalCount) * 100).toFixed(1)}
						</span>{" "}
						%
					</span>{" "}
					{Constants.percentage[lang]}
				</p>
			)}

			<Link to="/" className="btn btn-secondary btn-rounded btn-menu">
				<TiArrowBack />
				{Constants.backToMenu[lang]}
			</Link>
			<Share
				header={Constants.shareResult[lang]}
				title={Constants.appName[lang]}
				description={`${marvelChar.name[lang]} - ${marvelChar.adj[lang]} ${marvelChar.job[lang]}`}
				imageUrl={marvelChar.image_url}
				sharedUrl={window.location.href}
			/>
			<Share
				header={Constants.shareApp[lang]}
				title={Constants.appName[lang]}
				description={Constants.appSubTitle[lang]}
				imageUrl={`${Constants.s3BaseUrl}/landing.jpg`}
				sharedUrl={window.location.origin}
			/>
		</div>
	);
};

export default Result;
