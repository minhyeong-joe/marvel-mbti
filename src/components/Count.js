import React, { useEffect, useState } from "react";

import "../styles/count.scss";

const Count = ({ label, number, duration }) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		let start = 0;
		const end = parseInt(number.substring(0, 3));
		if (start === end) return;

		let totalMilSecDur = parseInt(duration);
		let incrementTime = (totalMilSecDur / end) * 1000;

		let timer = setInterval(() => {
			start += 1;
			setCount(
				(String(start) + number.substring(3)).replace(
					/\B(?=(\d{3})+(?!\d))/g,
					","
				)
			);
			if (start === end) clearInterval(timer);
		}, incrementTime);
	}, [number, duration]);
	return (
		<div className="count">
			<p>
				{label}: {count}
			</p>
		</div>
	);
};

export default Count;
