import React from "react";

const Video = (props) => {
	return (
		<nav>
			<h1>Video {props.nr}</h1>
			<button onClick={props.setToggle}>Toggle</button>
		</nav>
	);
};

export default Video;
