import './Habitaciones.css';
//useState
// import { useState } from 'react';

function Habitaciones(props) {
	return (
		<div className="habitacionesDiv__Container">
			<div className="card-deck">
				<div className="card marginBottom">
					<img
						className="card-img-top"
						src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
						alt="Room"
					/>
					<div className="card-body">
						<h5 className="card-title">Tipo habitacion</h5>
						<p className="card-text">Texto info habitacion</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							<a className="noDecoration" href="/habitacion/:id">
								Reservar
							</a>
						</small>
					</div>
				</div>
				<div className="card marginBottom">
					<img
						className="card-img-top"
						src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
						alt="Room"
					/>
					<div className="card-body">
						<h5 className="card-title">Tipo habitacion</h5>
						<p className="card-text">Texto info habitacion</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							<a className="noDecoration" href="/habitacion/:id">
								Reservar
							</a>
						</small>
					</div>
				</div>
				<div className="card marginBottom">
					<img
						className="card-img-top"
						src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
						alt="Room"
					/>
					<div className="card-body">
						<h5 className="card-title">Tipo habitacion</h5>
						<p className="card-text">Texto info habitacion</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							<a className="noDecoration" href="/habitacion/:id">
								Reservar
							</a>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Habitaciones;
