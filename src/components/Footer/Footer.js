import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import './Footer.css';
import { useEffect, useState } from 'react';

const FooterMenu = () => {
	const [ showButton, setShowButton ] = useState(false);

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
						<p className="firstP__Footer">Nombre hotel</p>
						<p className="P__Footer">Dirección</p>
						<p className="P__Footer">CP</p>
						<p className="P__Footer">telefono</p>
						<p className="P__Footer">email</p>
					</MDBCol>
					<MDBCol md="4">
						<img src="../../images/in-color.jpg" alt="hotel" />
					</MDBCol>
					<MDBCol md="4">
						<h5 className="title">Web map</h5>
						<ul className="noPaddingNoMargin">
							<li className="list-unstyled">
								<a href="/">Home</a>
							</li>
							<li className="list-unstyled">
								<a href="/hotel">Hotel</a>
							</li>
							<li className="list-unstyled">
								<a href="/reservation">Reservas</a>
							</li>
							<li className="list-unstyled">
								<a href="/restaurante">Restaurante</a>
							</li>
							<li className="list-unstyled">
								<a href="/contacto">Contacto</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3 maringTopFooter">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright: <a href="guesthotel.com"> guesthotel.com </a>
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
