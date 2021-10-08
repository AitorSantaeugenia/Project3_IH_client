//Componentes
import ReservarBuscador from '../components/ReservarBuscador/ReservarBuscador';
import Habitaciones from '../components/Habitaciones/Habitaciones';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CaruselSingleRoom/CarouselSingleRoom';
import { Spinner } from 'react-bootstrap';
//Axios usage
import axios from 'axios';
//use Effect needed
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function Hotel() {
	//Coming from GET
	const [ infoRooms, setInfoRooms ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	const getAllInfoRooms = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/habitaciones`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoRooms(response.data);
				//console.log(response.data);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllInfoRooms();
	}, []);

	return (
		<div className="carousel__Div">
			{/* hola {infoRooms[0].nombre} */}
			<CarouselSingle />
			<ReservarBuscador />
			{infoRooms.length !== 0 ? (
				infoRooms.map((infoRoom) => (
					<div className="habitacionesDiv__Container" key={infoRoom._id}>
						<div className="card-deck">
							<div className="card marginBottom">
								<img className="card-img-top" src={infoRoom.imagen} alt="Room" />
								<div className="card-body">
									<h5 className="card-title">
										{infoRoom.nombre} - {infoRoom.tipo}
									</h5>
									<p className="card-text">{infoRoom.info}</p>
									<p className="card-text">Invitados: {infoRoom.maxguests}</p>
									<p className="card-text">Precio: {infoRoom.precio}€</p>
									<p className="card-text">Disponibilidad: {infoRoom.cantidad}</p>
								</div>
								<div className="card-footer">
									<small className="text-muted">
										<button>Reservar</button>
									</small>
								</div>
							</div>
						</div>
					</div>
				))
			) : !isLoading ? (
				<Spinner animation="border" role="status" className="margin50__bottom margin50__top">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			) : (
				<Habitaciones />
			)}
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Hotel;
