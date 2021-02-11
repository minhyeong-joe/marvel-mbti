import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../LanguageContext";
import { FaGlobe } from "react-icons/fa";

import "../styles/languageSelect.scss";

const LanguageSwitch = ({ history, location }) => {
	const [lang, setLang] = useContext(LanguageContext);

	useEffect(() => {
		if (location.search === "?en") {
			setLang("en");
			history.replace({ pathname: location.pathname });
		}
	});

	const onChangeLanguage = (value) => {
		setLang(value);
	};

	return (
		<div className="language-select-container">
			<FaGlobe color="white" />
			<select
				className="language-select"
				value={lang}
				onChange={(e) => {
					onChangeLanguage(e.target.value);
				}}
			>
				<option value="en">English</option>
				<option value="kr">한글</option>
			</select>
		</div>
	);
};

export default LanguageSwitch;
