import React from "react";
import PropTypes from "prop-types";

//create your first component
const Home = props => {
	return (
		<div className="contador">
			<div className="cajita icono">
				<i className="fas fa-stopwatch"></i>
			</div>
			<div className="cajita">{props.centenaMil}</div>
			<div className="cajita">{props.centenaMil}</div>
			<div className="cajita">{props.unidadMil}</div>
			<div className="cajita">{props.centena}</div>
			<div className="cajita">{props.decena}</div>
			<div className="cajita">{props.unidad}</div>
		</div>
	);
};

Home.propTypes = {
	unidad: PropTypes.number,
	decena: PropTypes.number,
	centena: PropTypes.number,
	centenaMil: PropTypes.number,
	decenaMil: PropTypes.number,
	unidadMil: PropTypes.number
};

export default Home;
