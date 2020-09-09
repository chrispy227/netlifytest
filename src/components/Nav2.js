import React from "react";

const Nav2 = (props) => {
	return <nav>{props.toggle ? <h1>Nav</h1> : ""}</nav>;
};
//  return nav {toggle if true render this but if not then nothing}
export default Nav2;
