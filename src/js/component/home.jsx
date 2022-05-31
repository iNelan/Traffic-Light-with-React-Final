import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setcolor] = useState("red");

	return (
		<div className="Traffic">
			<div
				onClick={() => setcolor("red")}
				className={
					"red light" + (color === "red" ? " shine" : "")
				}></div>
			<div
				onClick={() => setcolor("yellow")}
				className={
					"yellow light" + (color === "yellow" ? " shine" : "")
				}></div>
			<div
				onClick={() => setcolor("green")}
				className={
					"green light" + (color === "green" ? " shine" : "")
				}></div>
		</div>
	);
};

export default Home;
