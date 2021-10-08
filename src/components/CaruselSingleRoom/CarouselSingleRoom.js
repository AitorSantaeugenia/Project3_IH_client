import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import './CarouselSingleRoom.css';

function CarouselSingle() {
	return (
		<Carousel
			slide={false}
			fade={false}
			interval={null}
			nextIcon=""
			prevIcon=""
			prevLabel=""
			nextLabel=""
			className="background__Carousel"
		>
			<Carousel.Item className="carusel-item-2">
				<img
					className="d-block w-100 image__Carousel2"
					src="https://www.hgcitysuites.com/assets/img/gallery/habitacion_superior_con_cocina/es/Hotel-HG-City-Suites-_Barcelona-Habitacion-cocina.tip-2-1_.jpg"
					alt="First slide"
				/>
				<Carousel.Caption className="bgBackColor">
					<h3 className="bold">Las mejores habitaciones</h3>
					<p>Al mejor precio</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselSingle;
