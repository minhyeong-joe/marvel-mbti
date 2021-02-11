import React, { useContext, useState } from "react";
import { FaFacebookF, FaCopy } from "react-icons/fa";

import images from "../assets";
import FlashMessage from "./FlashMessage";
import "../styles/share.scss";
import { LanguageContext } from "../LanguageContext";

const Share = ({ header, title, description, imageUrl, sharedUrl }) => {
	const [visible, setVisible] = useState(false);
	const isEnglish = useContext(LanguageContext)[0] === "en";
	let shared_url = isEnglish ? sharedUrl + "?en" : sharedUrl;

	const onClickCopyLink = () => {
		setVisible(false);
		const text = document.createElement("textarea");
		document.body.appendChild(text);
		text.value = shared_url;
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
					webUrl: shared_url,
					mobileWebUrl: shared_url,
				},
			},
		};
		window.Kakao.Link.sendDefault(feed);
	};

	const onClickFacebook = () => {
		window.FB.ui({
			display: "popup",
			method: "share",
			href: shared_url,
		});
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
