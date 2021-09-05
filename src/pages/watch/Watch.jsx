import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
	return (
		<div className="watch">
			<div className="back">
				<ArrowBackOutlined />
				Home
			</div>
			<video
				className="video"
				mute
				autoPlay
				progress
				controls
				//src="https://imdb-video.media-imdb.com/vi1032782617/1434659607842-pgv4ql-1606954147857.mp4?Expires=1630905591&Signature=X5cembY-lBuY0KqTx93~NlSPFIpsnj7FOFm4VQW8nSMwaERrqT0qVW9872e~A~Loa1RIsg9T-DTBGQ1zNqmIJdagCG8DZVV7-VW6T3nWZ9sGZbEXqIsT8vaKlnQnW5vhuGiQnXOWpJLeviz8EqvxWLD3l2VjCJQy64LTb~xw~nmQuFm2w2g6rTZNWdKwwwZhZ2qcgDBhjDdvGXR3bI-t4oP9PgA6rAxxT8cws1-jGxgFWgOgzAoxWuej9qxhUlmWJEm-P2rKcKjwygJ5E2kmW~ZrhmC5mbNR8f4VCWg~NlrovuL51az11EWvPW1QSrWEhAr6iDeLkrAYeX~u4rs9lg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
				src="https://imdb-video.media-imdb.com/vi1032782617/1434659607842-pgv4ql-1606954147857.mp4?Expires=1630905591&Signature=X5cembY-lBuY0KqTx93~NlSPFIpsnj7FOFm4VQW8nSMwaERrqT0qVW9872e~A~Loa1RIsg9T-DTBGQ1zNqmIJdagCG8DZVV7-VW6T3nWZ9sGZbEXqIsT8vaKlnQnW5vhuGiQnXOWpJLeviz8EqvxWLD3l2VjCJQy64LTb~xw~nmQuFm2w2g6rTZNWdKwwwZhZ2qcgDBhjDdvGXR3bI-t4oP9PgA6rAxxT8cws1-jGxgFWgOgzAoxWuej9qxhUlmWJEm-P2rKcKjwygJ5E2kmW~ZrhmC5mbNR8f4VCWg~NlrovuL51az11EWvPW1QSrWEhAr6iDeLkrAYeX~u4rs9lg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
			></video>
		</div>
	);
}
