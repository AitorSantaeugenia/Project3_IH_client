import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './Footer.css';
import { useEffect, useState } from 'react';
//history
import { useHistory } from 'react-router-dom';

const FooterMenu = () => {
	const [ showButton, setShowButton ] = useState(false);
	const history = useHistory();

	const toHome = (e) => {
		history.push('/');
	};
	const toRooms = (e) => {
		history.push('/habitaciones');
	};
	const toRestaurant = (e) => {
		history.push('/restaurante');
	};
	const toTienda = (e) => {
		history.push('/tienda');
	};
	const toContact = (e) => {
		history.push('/contacto');
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<MDBFooter className="font-small pt-4 ">
			<MDBContainer fluid className="text-center text-md-left margin-top20">
				<MDBRow>
					<MDBCol md="4">
						<p className="firstP__Footer">Hotel Catalunya</p>
						<p className="P__Footer">C/ Falsa 123</p>
						<p className="P__Footer">9209</p>
						<p className="P__Footer">669596326</p>
						<p className="P__Footer">hotelcatalunya@gmail.com</p>
					</MDBCol>
					<MDBCol md="4">
						<img
							src="https://res.cloudinary.com/aitorsantaeugenia/image/upload/v1633554482/project3_ironhack_hotel/ky05b2v6mkyr5spp5f53.png"
							alt="hotel"
							className="logoFooterImg"
						/>
					</MDBCol>
					<MDBCol md="4">
						<h5 className="title">Mapa web</h5>
						<ul className="noPaddingNoMargin">
							<li className="list-unstyled">
								{/* eslint-disable-next-line */}
								<a onClick={toHome} className="noDecoration colorWhite yesPointer">
									Home
								</a>
							</li>
							<li className="list-unstyled">
								{/* eslint-disable-next-line */}
								<a onClick={toRooms} className="noDecoration colorWhite yesPointer">
									Habitaciones
								</a>
							</li>
							<li className="list-unstyled" id="footerNavRestaurante">
								{/* eslint-disable-next-line */}
								<a onClick={toRestaurant} className="noDecoration colorWhite yesPointer">
									Restaurante
								</a>
							</li>
							<li className="list-unstyled" id="footerNavTienda">
								{/* eslint-disable-next-line */}
								<a onClick={toTienda} className="noDecoration colorWhite yesPointer">
									Tienda
								</a>
							</li>
							<li className="list-unstyled">
								{/* eslint-disable-next-line */}
								<a onClick={toContact} className="noDecoration colorWhite yesPointer">
									Contacto
								</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright py-3 maringTopFooter">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright: <a href="guesthotel.com"> hoteltemplater.com </a>
				</MDBContainer>
				{showButton && (
					<button onClick={scrollToTop} className="back-to-top">
						&#8679;
					</button>
				)}
			</div>
		</MDBFooter>
	);
};

export default FooterMenu;
