import React from "react";

import "../styles/reset.scss";
import "../styles/main.scss";

const App = () => {
	return (
		<div className="app-container">
			<div className="bg-overlay">
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
						<button className="btn btn-primary start-btn">시작하기</button>
						<button className="btn btn-secondary">친구들에게 공유</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
