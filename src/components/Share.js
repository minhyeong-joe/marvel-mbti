import React from "react";
import { FaFacebookF, FaCopy } from "react-icons/fa";

import images from "../assets";
import "../styles/share.scss";

const Share = ({ header, title, description, imageUrl, sharedUrl }) => {
	const onClickCopyLink = () => {
		window.navigator.clipboard.writeText(sharedUrl).then(
			() => {
				console.log("copied to clipboard");
			},
			() => {
				console.log("failed to copy to clipboard");
			}
		);
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
				<button className="btn btn-icon" onClick={onClickCopyLink}>
					<FaCopy color="black" />
				</button>
				<button className="btn btn-icon katalk" onClick={onClickKakaotalk}>
					<img src={images.katalk.default} alt="katalk" />
				</button>
				<button className="btn btn-icon facebook">
					<FaFacebookF />
				</button>
			</div>
		</>
	);
};

export default Share;
