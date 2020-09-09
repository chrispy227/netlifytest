import React from "react";
import "./App.css";
// Import Components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";

function App() {
	// Write Javascript Here
	// const name = "developedByChris";
	// const age = 26;
	// Array of information
	return (
		<div className="App">
			<div className="home">
				<h1>Hello React World</h1>
				<Nav />
				<Tweets />
			</div>
		</div>
	);
}

export default App;
