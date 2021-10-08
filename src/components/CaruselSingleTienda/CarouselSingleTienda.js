import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import './CarouselSingleTienda.css';

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
					src="https://media.cntraveler.com/photos/5e4e7ed7e1c50d00081ac735/master/w_1600%2Cc_limit/TheAlida_KeepShop-MakeReady-2020.jpg"
					alt="First slide"
				/>
				<Carousel.Caption className="bgBackColor">
					<h3 className="bold">Multiples servicios</h3>
					<p>Disfruta de la mejor tienda</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselSingle;
