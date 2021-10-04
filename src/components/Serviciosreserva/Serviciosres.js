import React from 'react';
import './Serviciosres.css';

//icons
import { BsFillCheckCircleFill, BsHandThumbsUpFill, BsFillCalendar2WeekFill, BsCashCoin } from 'react-icons/bs';

const Serviciosres = () => {
	return (
		<div className="serviciosDiv__Container">
			<div>
				<h1 className="serviciosDiv__Title">Reserva en nuestra web y beneficiate de las siguientes ventajas</h1>
			</div>
			<div class="card-group serviciosDiv__cards">
				<div className="serviciosCard__Card serviciosCard">
					<BsFillCheckCircleFill className="centeredAuto serviciosResIcon" />
					<div className="card-body">
						<h3 className="fontSize-h3Serviciosres">Mejores precios</h3>
						<p className="card-text">Mejores precios y mejores ofertas en nuestra web.</p>
					</div>
				</div>
				<div className="serviciosCard__Card serviciosCard">
					<BsHandThumbsUpFill className="centeredAuto serviciosResIcon" />
					<div className="card-body">
						<h3 className="fontSize-h3Serviciosres">Cancelación gratuita</h3>
						<p className="card-text">Cancelación gratuita hasta 7 días.</p>
					</div>
				</div>
				<div className="serviciosCard__Card serviciosCard">
					<BsFillCalendar2WeekFill className="centeredAuto serviciosResIcon" />
					<div className="card-body">
						<h3 className="fontSize-h3Serviciosres">Reservas seguras</h3>
						<p className="card-text">Reserva en nuestra web. Transmisión codificada.</p>
					</div>
				</div>
				<div className="serviciosCard__Card serviciosCard">
					<BsCashCoin className="centeredAuto serviciosResIcon" />
					<div className="card-body">
						<h3 className="fontSize-h3Serviciosres">Paga en el hotel</h3>
						<p className="card-text">Sin cargos anteriores a su llegada.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Serviciosres;
