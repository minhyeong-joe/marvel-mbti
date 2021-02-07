import React from "react";

import "../styles/progressBar.scss";

const ProgressBar = ({ current, total }) => {
	return (
		<div className="progress">
			<p className="question-counter">
				{current + 1} / {total}
			</p>
			<div className="progress-bar">
				<div
					className="progress-percentage"
					style={{ width: `${((current + 1) / total) * 100}%` }}
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
