import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { FaCopy, FaFacebookF } from "react-icons/fa";

import FlashMessage from "react-flash-message";

import Constants from "../language";

import { LanguageContext } from "../LanguageContext";
import { results } from "../results";

import images from "../assets";

const Result = ({ match }) => {
	const [lang, setLang] = useContext(LanguageContext);
	const [showFlashMessage, setShowFlashMessage] = useState(false);
	const { mbti } = match.params;
	const marvelChar = results[mbti];

	const onClickCopyLink = (link) => {
		setShowFlashMessage(false);

		navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
			if (result.state == "granted" || result.state == "prompt") {
				navigator.clipboard.writeText(link).then(
					() => {
						setShowFlashMessage(true);
						setTimeout(() => {
							setShowFlashMessage(false);
						}, 1500);
					},
					() => {
						console.log("failed to copy to clipboard");
					}
				);
			}
		});
	};

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
			<div className="relations-container">
				<div className="good relation-container">
					<h3 className="header">{Constants.goodWith[lang]}</h3>
					<div className="good relation-box">
						{marvelChar.good_relation.map((good) => {
							return (
								<img
									src={images[good].default}
									className="relation-image"
									alt={good}
									key={good}
								/>
							);
						})}
					</div>
				</div>
				<div className="bad relation-container">
					<h3 className="header">{Constants.badWith[lang]}</h3>
					<div className="bad relation-box">
						{marvelChar.bad_relation.map((bad) => {
							return (
								<img
									src={images[bad].default}
									className="relation-image"
									alt={bad}
									key={bad}
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="percentage-container">
				<p>
					<span>8.7</span>
					<span>%</span> {Constants.percentage[lang]}
				</p>
			</div>
			<Link to="/" className="btn btn-secondary btn-rounded btn-menu">
				<TiArrowBack />
				{Constants.backToMenu[lang]}
			</Link>
			<div className="share-container">
				<h3 className="header">{Constants.shareResult[lang]}</h3>
				<div className="icon-btn-container">
					<button
						className="btn btn-icon"
						onClick={() => onClickCopyLink(window.location.href)}
					>
						<FaCopy color="black" />
					</button>
					<button className="btn btn-icon katalk">
						<img src={images.katalk.default} alt="katalk" />
					</button>
					<button className="btn btn-icon facebook">
						<FaFacebookF />
					</button>
				</div>
				<h3 className="header">{Constants.shareApp[lang]}</h3>
				<div className="icon-btn-container">
					<button
						className="btn btn-icon"
						onClick={() => onClickCopyLink(window.location.origin)}
					>
						<FaCopy color="black" />
					</button>
					<button className="btn btn-icon katalk">
						<img src={images.katalk.default} alt="katalk" />
					</button>
					<button className="btn btn-icon facebook">
						<FaFacebookF />
					</button>
				</div>
			</div>
			{showFlashMessage && (
				<FlashMessage duration={1500}>
					<div className="flash-message">
						<p>Link copied to Clipboard!</p>
					</div>
				</FlashMessage>
			)}
		</div>
	);
};

export default Result;
