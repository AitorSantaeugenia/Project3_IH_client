//Componentes
import ReservarBuscador from '../components/Reservar/Reservar';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CarouselSingle/CarouselSingle';
import ContactForm from '../components/Contacto/Contacto';
import { Spinner } from 'react-bootstrap';
//Axios usage
import axios from 'axios';
//use Effect needed
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

function Contacto() {
	const [ infoContacto, setInfoContacto ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	const getAllFromContactoHotel = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/contacto`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoContacto(response.data);
				//console.log(response.data);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllFromContactoHotel();
	}, []);

	return (
		<div className="carousel__Div">
			<CarouselSingle />
			<ReservarBuscador />
			{infoContacto.length !== 0 ? (
				infoContacto.map((infoContacto) => (
					<div className="contactForm__container" key={infoContacto._id}>
						<div className="infoHotel__contactFormInfo">
							<img src={infoContacto.image} alt="hotel" className="imageForm__contact" />
							<div className="infoHotel__contactleft">
								<p className="firstP__ContactForm">{infoContacto.nombre}</p>
								<p className="P__ContactForm">{infoContacto.direct}</p>
								<p className="P__ContactForm">{infoContacto.codigoP}</p>
								<p className="P__ContactForm">{infoContacto.telf}</p>
								<p className="Plast__ContactForm">{infoContacto.email}</p>
							</div>
						</div>
						<div className="infoHotel__contactForm">
							<form id="contact-form" method="POST" className="fg-center">
								<div className="form-group">
									<label htmlFor="name">Nombre</label>
									<input
										type="text"
										className="form-control inputSizeController"
										placeholder="Nombre..."
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Email</label>
									<input
										type="email"
										className="form-control inputSizeController"
										aria-describedby="emailHelp"
										placeholder="Email..."
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Asunto</label>
									<input
										type="text"
										className="form-control inputSizeController"
										placeholder="Asunto..."
									/>
								</div>
								<div className="form-group">
									<label htmlFor="message">Mensaje</label>
									<textarea
										className="form-control no-resize inputSizeController"
										rows="5"
										placeholder="Mensaje..."
									/>
								</div>
								<button type="submit" className="btn btn-primary inputSizeController marginTopButton">
									Enviar
								</button>
							</form>
						</div>
					</div>
				))
			) : !isLoading ? (
				<Spinner animation="border" role="status" className="margin50__bottom margin50__top">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			) : (
				<ContactForm />
			)}
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Contacto;
