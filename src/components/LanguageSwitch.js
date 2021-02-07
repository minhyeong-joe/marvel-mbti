import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { FaGlobe } from "react-icons/fa";

import "../styles/languageSelect.scss";

const LanguageSwitch = () => {
	const [lang, setLang] = useContext(LanguageContext);

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
