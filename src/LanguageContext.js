import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
	const [lang, setLang] = useState("kr");
	return (
		<LanguageContext.Provider value={[lang, setLang]}>
			{props.children}
		</LanguageContext.Provider>
	);
};
