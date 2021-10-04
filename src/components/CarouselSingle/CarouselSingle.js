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
					src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselSingle;
