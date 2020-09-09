import React from "react";
// Import Components
import Tweet from "./Tweet";

const Tweets = (props) => {
	const tweets = [
		{ name: "devchris", tweet: "react ugh, i need coffee" },
		{ name: "traversy media", tweet: "what's up guys, i'm takeing a break" },
		{ name: "webdevsimplified", tweet: "hey guys! I'm simplifying the web" },
	];
	return (
		<section>
			{tweets.map((tweet) => (
				<Tweet name={tweet.name} tweet={tweet.tweet} />
			))}
		</section>
	);
};

export default Tweets;
