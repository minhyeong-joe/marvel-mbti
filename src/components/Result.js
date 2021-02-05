import React from "react";

const Result = ({ match }) => {
	const { mbti } = match.params;
	console.log(mbti);
	return <div>Result</div>;
};

export default Result;
