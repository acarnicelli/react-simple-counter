//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let centenaMil = 0;
let decenaMil = 0;
let unidadMil = 0;
let centena = 0;
let contador = 0;
let unidad = 0;
let decena = 0;

let contar = true;

const pause = () => {
	contar = false;
};

const resume = () => {
	contar = true;
};

const reset = () => {
	contador = 0;
	resume();
};

setInterval(
	function() {
		centenaMil = Math.floor(contador / 100000) % 10;
		decenaMil = Math.floor(contador / 10000) % 10;
		unidadMil = Math.floor(contador / 1000) % 10;
		centena = Math.floor(contador / 100) % 10;
		decena = Math.floor(contador / 10) % 10;
		unidad = Math.floor(contador) % 10;

		if (contar) {
			ReactDOM.render(
				<div className="contador cuerpo">
					<Home
						unidad={unidad}
						decena={decena}
						centena={centena}
						unidadMil={unidadMil}
						decenaMil={decenaMil}
						centenaMil={centenaMil}
					/>
					<div className="botones">
						<button className="cajita boton" onClick={reset}>
							RESET
						</button>
						<button className="cajita boton" onClick={pause}>
							PAUSE
						</button>
						<button className="cajita boton" onClick={resume}>
							RESUME
						</button>
					</div>
				</div>,
				document.querySelector("#app")
			);
			contador++;
		}
	},

	1000 //en ms
);
