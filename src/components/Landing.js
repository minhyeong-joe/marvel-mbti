import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

const Landing = () => {
	const [lang, setLang] = useContext(LanguageContext);
	console.log(lang);
	return (
		<div className="landing">
			<p className="sub-title">마블 세계관속에 나는 누구일까?</p>
			<h1 className="app-title">
				<span>M</span>
				<span>B</span>
				<span>T</span>
				<span>I</span> 로 보는
				<br />
				나의 <span>마블</span> 캐릭터
			</h1>
			<div className="btn-container">
				<Link to="/assessment" className="btn btn-primary start-btn">
					시작하기
				</Link>
				<button className="btn btn-secondary">친구들에게 공유</button>
			</div>
		</div>
	);
};

export default Landing;
