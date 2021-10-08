import ReservarBuscador from '../components/Reservar/Reservar';
import TiendaComponente from '../components/Tienda/Tienda';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CaruselSingleTienda/CarouselSingleTienda';
import { Spinner } from 'react-bootstrap';
//Axios usage
import axios from 'axios';
//use Effect needed
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function Tienda() {
	//Coming from GET
	const [ infoTienda, setInfoTienda ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	const getAllFromTienda = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/tienda`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoTienda(response.data);
				//console.log(response.data);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllFromTienda();
	}, []);

	return (
		<div className="carousel__Div">
			<CarouselSingle />
			<ReservarBuscador />
			{infoTienda.length !== 0 ? (
				infoTienda.map((infoTienda) => (
					<div className="habitacionesDiv__Container" key={infoTienda._id}>
						<div className="card-deck">
							<div className="card marginBottom">
								<img className="card-img-top" src={infoTienda.imagen} alt="Room" />
								<div className="card-body">
									<h5 className="card-title">{infoTienda.nombre}</h5>
									<p className="card-text">{infoTienda.info}</p>
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
				<TiendaComponente />
			)}
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Tienda;
