import React from 'react';
import './Contacto.css';

const ContactoForm = () => {
	return (
		<div className="contactForm__container">
			<div className="infoHotel__contactFormInfo">
				<img
					src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
					alt="hotel"
					className="imageForm__contact"
				/>
				<div className="infoHotel__contactleft">
					<p className="firstP__ContactForm">Nombre hotel</p>
					<p className="P__ContactForm">Dirección</p>
					<p className="P__ContactForm">CP</p>
					<p className="P__ContactForm">telefono</p>
					<p className="Plast__ContactForm">email</p>
				</div>
			</div>
			<div className="infoHotel__contactForm">
				<form id="contact-form" method="POST" className="fg-center">
					<div className="form-group">
						<label htmlFor="name">Nombre</label>
						<input type="text" className="form-control inputSizeController" value="test" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email</label>
						<input
							type="email"
							className="form-control inputSizeController"
							aria-describedby="emailHelp"
							value="test"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Asunto</label>
						<input
							type="email"
							className="form-control inputSizeController"
							aria-describedby="emailHelp"
							value="test"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Mensaje</label>
						<textarea className="form-control no-resize inputSizeController" rows="5" value="test" />
					</div>
					<button type="submit" className="btn btn-primary inputSizeController marginTopButton">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactoForm;
