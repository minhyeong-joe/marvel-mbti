import React, { useState } from "react";
import { FaFacebookF, FaCopy } from "react-icons/fa";
import { Helmet } from "react-helmet";

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

	const onClickFacebook = () => {
		const head = document.querySelector("head");
		const original = head.innerHTML;
		const newMetaHtml = `
		<meta property="og:type" content="website">
		<meta property="og:url" content="${sharedUrl}">
		<meta property="og:title" content="${title}">
		<meta property="og:description" content="${description}">
		<meta property="og:image" content="${imageUrl}">
	
		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="${sharedUrl}">
		<meta property="twitter:title" content="${title}">
		<meta property="twitter:description" content="${description}">
		<meta property="twitter:image" content="${imageUrl}">`;
		head.innerHTML += newMetaHtml;
		window.FB.ui({
			display: "popup",
			method: "share",
			href: sharedUrl,
		});
		head.innerHTML = original;
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
				<button className="btn btn-icon facebook" onClick={onClickFacebook}>
					<FaFacebookF />
				</button>
			</div>
			{visible && <FlashMessage message="Link copied to Clipboard!" />}
		</>
	);
};

export default Share;
