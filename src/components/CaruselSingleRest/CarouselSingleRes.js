import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import './CarouselSingleRes.css';

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
					src="https://www.valldemossahotel.com/wp-content/uploads/2019/02/MG_4439-1.jpg"
					alt="First slide"
				/>
				<Carousel.Caption className="bgBackColor">
					<h3 className="bold">Restaurante 5 estrellas</h3>
					<p>Reconocido a nivel mundial</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselSingle;
