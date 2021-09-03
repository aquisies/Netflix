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
		"https://vod-progressive.akamaized.net/exp=1630576447~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=43cc5d3f8388464a02b16df5649daa9f1e7246bf03b0cf00c02bbf6adf20dc33/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4?filename=video.mp4";
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
