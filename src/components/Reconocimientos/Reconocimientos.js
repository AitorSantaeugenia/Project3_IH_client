import React from 'react';
import './Reconocimientos.css';

const Reconocimientos = () => {
	return (
		<div className="reconocimientoDiv__container">
			<div>
				<h1 className="reconocimientoDiv__h1">Reconocimientos</h1>
			</div>
			<div>
				<img src="../../images/in-color.jpg" alt="reconocimientos" className="reconocimientos__img" />
				<img src="../../images/jo-gris.jpg" alt="reconocimientos" className="reconocimientos__img" />
				<img src="../../images/ta-color.jpg" alt="reconocimientos" className="reconocimientos__img" />
				<img src="../../images/tb-color.jpg" alt="reconocimientos" className="reconocimientos__img" />
				<img src="../../images/te-color.jpg" alt="reconocimientos" className="reconocimientos__img" />
				<img src="../../images/tr-color.jpg" alt="reconocimientos" className="reconocimientos__img" />
			</div>
			<div className="separator__reconocimientos" />
		</div>
	);
};

export default Reconocimientos;
