import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { LanguageProvider } from "../LanguageContext";
import Landing from "./Landing";
import Assessment from "./Assessment";
import Result from "./Result";
import LanguageSwitch from "./LanguageSwitch";
import "../styles/reset.scss";
import "../styles/main.scss";

const App = () => {
	useEffect(() => {
		window.Kakao.init("47bbe7823395f610d6c8a559041758ca");
	});

	return (
		<BrowserRouter>
			<LanguageProvider>
				<div className="app-container">
					<div className="bg-overlay"></div>
					<div className="main-content">
						<Route path="/" exact component={Landing} />
						<Route path="/assessment" exact component={Assessment} />
						<Route path="/result/:mbti" exact component={Result} />
					</div>
					{/* Add language switch when all English texts are translated */}
					{/* <LanguageSwitch /> */}
				</div>
			</LanguageProvider>
		</BrowserRouter>
	);
};

export default App;
