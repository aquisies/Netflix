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
		"https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
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
							<PlayArrow />
							<Add />
							<ThumbUpAltOutlined />
							<ThumbDownOutlined />
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
