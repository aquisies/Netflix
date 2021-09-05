import {
	Add,
	PlayArrow,
	ThumbDownOutlined,
	ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
	const [isHovered, setIsHovered] = useState(false);
	const trailer =
		//"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
		//"https://imdb-video.media-imdb.com/vi1032782617/1434659607842-pgv4ql-1606954147857.mp4?Expires=1630905591&Signature=X5cembY-lBuY0KqTx93~NlSPFIpsnj7FOFm4VQW8nSMwaERrqT0qVW9872e~A~Loa1RIsg9T-DTBGQ1zNqmIJdagCG8DZVV7-VW6T3nWZ9sGZbEXqIsT8vaKlnQnW5vhuGiQnXOWpJLeviz8EqvxWLD3l2VjCJQy64LTb~xw~nmQuFm2w2g6rTZNWdKwwwZhZ2qcgDBhjDdvGXR3bI-t4oP9PgA6rAxxT8cws1-jGxgFWgOgzAoxWuej9qxhUlmWJEm-P2rKcKjwygJ5E2kmW~ZrhmC5mbNR8f4VCWg~NlrovuL51az11EWvPW1QSrWEhAr6iDeLkrAYeX~u4rs9lg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";
		"https://imdb-video.media-imdb.com/vi1583726617/1434659607842-pgv4ql-1627915945452.mp4?Expires=1630905972&Signature=afriZSc~RBtwfKQgXjA8KrheGrCGhQDLgqIVxzFm7oUx0Fv0HpcZMX6yq~XiGpTNKVJbx78uHFw52KXnSoqAHWkM0s~EmvJ0EFNncYCfLF1BwCmEKAUj8DZzRBlIS9OZldOZSlfjHIitzDkkBiEIC74zCrMcD98S0w8ijtfxC0Oj5flACrYJ030EirjkMjguW4597R-Xj8IowcOG31XAkBfuraPVyrT6c4C02Qqmtm2lVkT5BDLIGgyUvUZXpRoGridI4eICwhooJYTjkz9tQVnwa7BRTWXumnSpekqHkNMgT2tsCeLQTSDZRqZvEGVerKkYNYVvPGAh5dX2DQmf8g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA";

	console.log(trailer);
	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src="https://as01.epimg.net/meristation/imagenes/2021/09/01/betech/1630497643_234056_1630497821_noticia_normal_recorte1.jpg"
				alt=""
			/>
			{isHovered && (
				<>
					<video src={trailer} muted autoPlay={true} loop />
					<div className="itemInfo">
						<div className="icons">
							<PlayArrow className="icon" />
							<Add className="icon" />
							<ThumbUpAltOutlined className="icon" />
							<ThumbDownOutlined className="icon" />
						</div>

						<div className="itemInfoTop">
							<span> 1 hour 14 mins</span>
							<span className="limit">+16</span>
							<span> 2019</span>
						</div>

						<div className="desc">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
							ratione provident commodi voluptas laboriosam doloremque.
						</div>

						<div className="genre">Action</div>
					</div>
				</>
			)}
		</div>
	);
}
