//Componentes
import ReservarBuscador from '../components/Reservar/Reservar';
import RestauranteComponent from '../components/Restaurante/Restaurante';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CaruselSingleRest/CarouselSingleRes';
import { Spinner } from 'react-bootstrap';
//Axios usage
import axios from 'axios';
//use Effect needed
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function Restaurante() {
	//Coming from GET
	const [ infoRestaurante, setInfoRestaurante ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	const getAllFromRestaurante = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/restaurante`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoRestaurante(response.data);
				//console.log(response.data);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllFromRestaurante();
	}, []);

	return (
		<div className="carousel__Div">
			<CarouselSingle />
			<ReservarBuscador />
			{infoRestaurante.length !== 0 ? (
				infoRestaurante.map((infoResta) => (
					<div className="habitacionesDiv__Container" key={infoResta._id}>
						<div className="card-deck">
							<div className="card marginBottom">
								<img className="card-img-top" src={infoResta.imagen} alt="Restaurante" />
								<div className="card-body">
									<h5 className="card-title">{infoResta.nombre}</h5>
									<p className="card-text">{infoResta.info}</p>
								</div>
								<div className="card-footer">
									<small className="text-muted">
										<a className="noDecoration" href="/reservar/:id">
											Reservar
										</a>
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
				<RestauranteComponent />
			)}
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Restaurante;
