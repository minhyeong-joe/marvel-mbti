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

	const onClickKakaotalk = (result) => {
		let feed = {
			objectType: "feed",
		};
		if (result) {
			feed.content = {
				title: Constants.appName[lang].replace(/(<([^>]+)>)/gi, ""),
				description: `${marvelChar.name[lang]} - ${marvelChar.adj[lang]} ${marvelChar.job[lang]}`,
				imageUrl: marvelChar.image_url,
				link: {
					webUrl: window.location.href,
					mobileWebUrl: window.location.href,
				},
			};
		} else {
			feed.content = {
				title: Constants.appName[lang].replace(/(<([^>]+)>)/gi, ""),
				description: Constants.appSubTitle[lang].replace(/(<([^>]+)>)/gi, ""),
				imageUrl: `https://marvel-mbti.s3-us-west-1.amazonaws.com/landing.jpg`,
				link: {
					webUrl: window.location.origin,
					mobileWebUrl: window.location.origin,
				},
			};
		}
		window.Kakao.Link.sendDefault(feed);
	};

	return (
		<div className="result-container">
			<h2 className="adj">{marvelChar.adj[lang]}</h2>
			<h2 className="job">{marvelChar.job[lang]}</h2>
			<img
				className="main-image"
				src={marvelChar.image_url}
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
									src={results[good].image_url}
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
									src={results[bad].image_url}
									className="relation-image"
									alt={bad}
									key={bad}
								/>
							);
						})}
					</div>
				</div>
			</div>
			{/* <div className="percentage-container">
				<p>
					<span>8.7</span>
					<span>%</span> {Constants.percentage[lang]}
				</p>
			</div> */}
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
					<button
						className="btn btn-icon katalk"
						onClick={() => onClickKakaotalk(true)}
					>
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
					<button
						className="btn btn-icon katalk"
						onClick={() => onClickKakaotalk(false)}
					>
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
