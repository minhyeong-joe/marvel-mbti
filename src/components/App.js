import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../styles/reset.scss";
import "../styles/main.scss";
import { LanguageProvider } from "../LanguageContext";
import Landing from "./Landing";
import Assessment from "./Assessment";
import Result from "./Result";
import LanguageSwitch from "./LanguageSwitch";

const App = () => {
	return (
		<BrowserRouter>
			<LanguageProvider>
				<div className="app-container">
					<div className="bg-overlay">
						<Route path="/" exact component={Landing} />
						<Route path="/assessment" exact component={Assessment} />
						<Route path="/result/:mbti" exact component={Result} />
						<LanguageSwitch className="language-switch" />
					</div>
				</div>
			</LanguageProvider>
		</BrowserRouter>
	);
};

export default App;
