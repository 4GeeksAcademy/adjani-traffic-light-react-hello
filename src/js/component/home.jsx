import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState(0)
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic Light!</h1>
			<div className="d-flex flex-column bg-dark col-1 p-2 mx-auto">
				<div><button onClick={() => setLight(1)} className={`p-5 rounded-full rounded-circle ${light === 1 ? "bg-danger" : "bg-secondary"}`} ></button></div>
				<div><button onClick={() => setLight(2)} className={`p-5 rounded-full rounded-circle ${light === 2 ? "bg-warning" : "bg-secondary"}`} ></button></div>
				<div><button onClick={() => setLight(3)} className={`p-5 rounded-full rounded-circle ${light === 3 ? "bg-success" : "bg-secondary"}`} ></button></div>
			</div>
		</div>
	);
};
export default Home;
