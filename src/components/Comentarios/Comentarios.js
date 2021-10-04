import React from 'react';
import './Comentarios.css';
import { Carousel } from 'react-bootstrap';
import { BsFillStarFill } from 'react-icons/bs';

const Comentarios = () => {
	return (
		<div className="comentariosDiv_Container">
			<Carousel variant="dark" slide={false} fade={false} className="carouselCommentarios">
				<Carousel.Item className="carouselItem__Comentarios">
					<img
						className="d-block w-100 comentariosCarousel__img"
						src="https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg"
						alt="First slide"
					/>
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />
					<Carousel.Caption className="textBlack">
						<h5 className="comentariosDiv__catchphrase">First slide label</h5>
						<p className="comentariosDiv__comentario">
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="carouselItem__Comentarios">
					<img
						className="d-block w-100 comentariosCarousel__img"
						src="https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg"
						alt="Second slide"
					/>
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />

					<Carousel.Caption className="textBlack">
						<h5 className="comentariosDiv__catchphrase">Second slide label</h5>
						<p className="comentariosDiv__comentario">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item className="carouselItem__Comentarios">
					<img
						className="d-block w-100 comentariosCarousel__img"
						src="https://www.maybelline.com/~/media/mny/us/face-makeup/modules/pathing-switcher/face-category-pathing-switcher.jpg"
						alt="Third slide"
					/>
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />
					<BsFillStarFill className="react-icons__Star" />

					<Carousel.Caption className="textBlack">
						<h5 className="comentariosDiv__catchphrase">Third slide label</h5>
						<p className="comentariosDiv__comentario">
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Comentarios;
