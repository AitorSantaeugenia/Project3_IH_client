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
		<MDBFooter className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="4">
						<h5 className="title">Footer Content</h5>
						<p>Here you can use rows and columns here to organize your footer content.</p>
					</MDBCol>
					<MDBCol md="4">
						<h5 className="title">Links</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">Link 1</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 2</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 3</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 4</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="4">
						<h5 className="title">Links</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">Link 1</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 2</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 3</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 4</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
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
