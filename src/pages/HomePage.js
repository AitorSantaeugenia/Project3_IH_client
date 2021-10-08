//Componentes
import DemoCarousel from '../components/Carousel/Carousel';
import Reservar from '../components/Reservar/Reservar';
import Infohotel from '../components/Infohotel/Infohotel';
import Servicioshotel from '../components/Servicios/Servicioshotel';
import Comentarios from '../components/Comentarios/Comentarios';
import Reconocmientos from '../components/Reconocimientos/Reconocimientos';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import { BsFillStarFill } from 'react-icons/bs';

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
				setInfo(response.data[0]);
				//console.log(response.data[0]);
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
			{info ? (
				<div className="divInfoHotel__Container">
					<div className="divInfoHotel__HotelName">{info.nombre}</div>
					<div className="divInfoHotel__Stars">
						<BsFillStarFill className="react-icons__Star" />
						<BsFillStarFill className="react-icons__Star" />
						<BsFillStarFill className="react-icons__Star" />
						<BsFillStarFill className="react-icons__Star" />
					</div>
					<div className="divInfoHotel__Catchphrase">{info.catchPhrase}</div>
					<div className="divInfoHotel__InfoHotel">{info.info}</div>
					<div className="separator" />
				</div>
			) : (
				<Infohotel props={info} />
			)}
			<Servicioshotel />
			<Comentarios />
			<Reconocmientos />
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default HomePage;
