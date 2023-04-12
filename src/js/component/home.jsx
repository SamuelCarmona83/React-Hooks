import React, { useState } from "react";


//create your first component
const Home = () => {
	//parte logica
	const [contador, setContador] = useState(0)

	//parte template - visual
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter!</h1>
			<button onClick={(evento) => setContador(contador - 1)} className="btn btn-danger">reducir</button>
			<p  className="text-center fs-1">
				{ contador }
			</p>
			<button onClick={(evento) => setContador(contador + 1)} className="btn btn-success">incrementar</button>
		</div>
	);
};

export default Home;