import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

function DemoCarousel() {
	return (
		<Carousel slide={false} fade={false} className="background__Carousel">
			<Carousel.Item>
				<img
					className="d-block w-100 image__Carousel"
					src="https://www.hotelescenter.es/wp-content/blogs.dir/1601/files/home//home-corporativa-cordoba-hotel-corboba-center-1.jpg"
					alt="First slide"
				/>
				<Carousel.Caption className="bgBackColor">
					<h3 className="bold">Hotel Catalunya</h3>
					<p>Hotel rural en el centro de la ciudad</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 image__Carousel"
					src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
					alt="Second slide"
				/>

				<Carousel.Caption className="bgBackColor">
					<h3 className="bold">Mejores habitaciones</h3>
					<p>Al mejor precio</p>
				</Carousel.Caption>
			</Carousel.Item>

			<Carousel.Item>
				<img
					className="d-block w-100 image__Carousel"
					src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption className="bgBackColor">
					<h3 className="bold">Hotel 4 estrellas</h3>
					<p>En el centro de la ciudad</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default DemoCarousel;

/*
		<Container>
			<Carousel>
				<div>
					<img
						src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
						alt="Hotel"
					/>
				</div>
				<div>
					<img
						src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
						alt="Hotel"
					/>
				</div>
				<div>
					<img
						src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg"
						alt="Hotel"
					/>
				</div>
			</Carousel>
		</Container>


				<Carousel slide={false} fade={false}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
*/
