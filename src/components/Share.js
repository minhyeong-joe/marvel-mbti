import React, { useState } from "react";
import { FaFacebookF, FaCopy } from "react-icons/fa";

import images from "../assets";
import FlashMessage from "./FlashMessage";
import "../styles/share.scss";

const Share = ({ header, title, description, imageUrl, sharedUrl }) => {
	const [visible, setVisible] = useState(false);

	const onClickCopyLink = () => {
		setVisible(false);
		const text = document.createElement("textarea");
		document.body.appendChild(text);
		text.value = sharedUrl;
		text.select();
		document.execCommand("copy");
		document.body.removeChild(text);
		setVisible(true);
		setTimeout(() => {
			setVisible(false);
		}, 1500);
	};

	const onClickKakaotalk = () => {
		let feed = {
			objectType: "feed",
			content: {
				title: title.replace(/(<([^>]+)>)/gi, ""),
				description: description.replace(/(<([^>]+)>)/gi, ""),
				imageUrl: imageUrl,
				link: {
					webUrl: sharedUrl,
					mobileWebUrl: sharedUrl,
				},
			},
		};
		window.Kakao.Link.sendDefault(feed);
	};

	return (
		<>
			<h3 className="share-header">{header}</h3>
			<div className="icon-btn-container">
				<button className="btn btn-icon copy" onClick={onClickCopyLink}>
					<FaCopy color="black" />
				</button>
				<button className="btn btn-icon katalk" onClick={onClickKakaotalk}>
					<img src={images.katalk.default} alt="katalk" />
				</button>
				<button className="btn btn-icon facebook">
					<FaFacebookF />
				</button>
			</div>
			{visible && <FlashMessage message="Link copied to Clipboard!" />}
		</>
	);
};

export default Share;
