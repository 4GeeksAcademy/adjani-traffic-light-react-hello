import React, { useState } from "react";

// create your first component
const Home = () => {
	const [light, setLight] = useState(0);

	const changeLightColor = () => {
		setLight((prevLight) => (prevLight === 3 ? 1 : prevLight + 1));
	};

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Traffic Light!</h1>
			<div className="container flex-column" style={{width: 150, backgroundColor:"#343a40", borderRadius: 30, padding: 10}}>
				<div><button style={{marginBottom: 10, padding: 50, borderRadius: 70, backgroundColor: light === 1 ? "#ff2222" : "#ccc", boxShadow: light === 1 ? "0 0 20px 10px rgba(255, 34, 34, 0.4)" : "none"}} onClick={() => setLight(1)}></button></div>
				<div><button style={{marginBottom: 10, padding: 50, borderRadius: 70, backgroundColor: light === 2 ? "#f7b71d" : "#ccc", boxShadow: light === 2 ? "0 0 20px 10px rgba(247, 183, 29, 0.3)" : "none"}} onClick={() => setLight(2)}></button></div>
				<div><button style={{ padding: 50, borderRadius: 70, backgroundColor: light === 3 ? "#09d308" : "#ccc", boxShadow: light === 3 ? "0 0 20px 10px rgba(9, 211, 8, 0.3)" : "none"}} onClick={() => setLight(3)}></button></div>
			</div>
			<button onClick={changeLightColor} style={{marginTop: 30, padding: 5, backgroundColor: '#0dcaf07a', borderRadius: 5}}>Change Color</button>
		</div>
	);
};

export default Home;
