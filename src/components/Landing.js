import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { LanguageContext } from "../LanguageContext";
import Constants from "../constants";
import images from "../assets";
import Share from "./Share";
import Count from "./Count";

import "../styles/landing.scss";

const Landing = () => {
	const [lang, _] = useContext(LanguageContext);
	const [count, setCount] = useState(0);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(Constants.backendUrl);
			setCount(data.count);
		})();
	}, [setCount]);

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
				<Share
					header={Constants.shareApp[lang]}
					title={Constants.appName[lang]}
					description={Constants.appSubTitle[lang]}
					imageUrl={`${Constants.s3BaseUrl}/landing.jpg`}
					sharedUrl={window.location.origin}
				/>
				<Count
					label={Constants.participants[lang]}
					number={count.toString()}
					duration="1"
				/>
				<img
					src={images.captain_america.default}
					alt="captain_america"
					className="landing-image cap_america"
				/>
				<img
					src={images.ironman.default}
					alt="ironman"
					className="landing-image ironman"
				/>
			</div>
		</div>
	);
};

export default Landing;
