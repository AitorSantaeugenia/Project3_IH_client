import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import './CarouselSingle.css';

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
					src="https://i.pinimg.com/originals/5b/86/d0/5b86d0bf45d9a77e007b1eefe9050404.jpg"
					alt="First slide"
				/>
				<Carousel.Caption className="bgBackColor">
					<h3 className="bold">Contacta con nosotros</h3>
					<p>Cualquier duda o consulta</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselSingle;
