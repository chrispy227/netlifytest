import React, { useState } from "react";
import "./App.css";
// Import Components
import Nav from "./components/Nav";
import Tweets from "./components/Tweets";

function App() {
	// Write Javascript Here
	// const name = "developedByChris";
	// const age = 26;
	const [counter, setCounter] = useState(0);
	const [toggle, setToggle] = useState(false);

	const incrementor = () => {
		setCounter((prev) => prev + 1);
		console.log(counter);
	};
	const toggler = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="App">
			<div className="home">
				<h1 className={toggle ? "active" : ""}>Hello React World</h1>
				<h2>Counter {counter}</h2>
				<button onClick={incrementor}>Click</button>
				<button onClick={toggler}>Toggle</button>
				<Nav />
				<Tweets />
			</div>
		</div>
	);
}

export default App;
