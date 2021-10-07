//Componentes
import DemoCarousel from '../components/Carousel/Carousel';
import Reservar from '../components/Reservar/Reservar';
import Infohotel from '../components/Infohotel/Infohotel';
import Servicioshotel from '../components/Servicios/Servicioshotel';
import Comentarios from '../components/Comentarios/Comentarios';
import Reconocmientos from '../components/Reconocimientos/Reconocimientos';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';

//tools
import { useState, useEffect } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

function HomePage() {
	const [ info, setInfo ] = useState([]);

	const GetAllInfoFromHotel = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfo(response.data);
				console.log(response);
				//setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		GetAllInfoFromHotel();
	}, []);

	return (
		<div className="carousel__Div">
			<DemoCarousel />
			<Reservar />
			<Infohotel />
			<Servicioshotel />
			<Comentarios />
			<Reconocmientos />
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default HomePage;
