import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import Constants from "../language";

const LanguageSwitch = () => {
	const [lang, setLang] = useContext(LanguageContext);

	const onChangeLanguage = (value) => {
		setLang(value);
	};

	return (
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
	);
};

export default LanguageSwitch;
