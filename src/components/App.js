import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { LanguageProvider } from "../LanguageContext";
import Landing from "./Landing";
import Assessment from "./Assessment";
import Result from "./Result";
import Relation from "./Relation";
import "../styles/reset.scss";
import "../styles/main.scss";
import Footer from "./Footer";

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
						<Route
							path="/relation/:relation/:mbti"
							exact
							component={Relation}
						/>
					</div>
					<Route path="*" component={Footer} />
				</div>
			</LanguageProvider>
		</BrowserRouter>
	);
};

export default App;
