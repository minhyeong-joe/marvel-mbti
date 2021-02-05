import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../styles/reset.scss";
import "../styles/main.scss";
import Landing from "./Landing";
import Assessment from "./Assessment";
import Result from "./Result";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-container">
				<div className="bg-overlay">
					<Route path="/" exact component={Landing} />
					<Route path="/assessment" exact component={Assessment} />
					<Route path="/result/:mbti" exact component={Result} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
