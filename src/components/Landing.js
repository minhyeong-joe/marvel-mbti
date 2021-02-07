import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { FaFacebookF, FaCopy } from "react-icons/fa";
import FlashMessage from "react-flash-message";
import Constants from "../language";
import images from "../assets";

const Landing = () => {
	const [lang, setLang] = useContext(LanguageContext);
	const [showFlashMessage, setShowFlashMessage] = useState(false);
	console.log(lang);

	const onClickCopyLink = (link) => {
		setShowFlashMessage(false);

		navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
			if (result.state === "granted" || result.state === "prompt") {
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
				<div className="share-container">
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
