import React from "react";

import "../styles/flashMessage.scss";

const FlashMessage = ({ message }) => {
	return (
		<div className="flash-message">
			<p>{message}</p>
		</div>
	);
};

export default FlashMessage;
