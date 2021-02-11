import React, { useContext } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Constants from "../constants";
import { LanguageContext } from "../LanguageContext";

import LanguageSwitch from "./LanguageSwitch";
import "../styles/footer.scss";

const Footer = ({ history, location }) => {
	const [lang, _] = useContext(LanguageContext);
	return (
		<div className="footer">
			<LanguageSwitch history={history} location={location} />
			<div className="credit">
				<p>
					<span>{Constants.appDev[lang]}:</span>
					{Constants.appDevName[lang]}
					<a
						href={Constants.appDevName["sns"]}
						target="_blank"
						rel="noreferrer"
					>
						<FaGithub />
					</a>
				</p>
				<p>
					<span>{Constants.translate[lang]}:</span>
					{Constants.translatorName[lang]}
					<a
						href={Constants.translatorName["sns"]}
						className="insta"
						target="_blank"
						rel="noreferrer"
					>
						<FaInstagram />
					</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
