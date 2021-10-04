import React from 'react';
import './Dashboard.css';
//icons react bootstrap
import { BsHouseDoor, BsFileEarmarkCode, BsPerson, BsInfoCircle, BsListTask } from 'react-icons/bs';

const Dashboard = () => {
	return (
		<div className="dashboardDiv__Container">
			<div className="dashboardDiv__Panel">
				<h3 className="dashboardDiv__title">Guest Hotel</h3>
				<div className="separator2" />
				<ul className="nav flex-column">
					<li className="nav-item nav__item">
						<BsHouseDoor className="lineHeight__icon" />
						<a className="nav-link nav__item__link " href="/dashboard">
							Hotel
						</a>
					</li>
					<li className="nav-item nav__item">
						<BsFileEarmarkCode className="lineHeight__icon" />
						<a className="nav-link disabled nav__item__link" href="/">
							Páginas
						</a>
					</li>
					<div className="borderLeft__Dashboard">
						<li className="nav-item nav__item">
							<a className="nav-link nav__item__link" href="/dashboard">
								Hotel
							</a>
						</li>
						<li className="nav-item nav__item">
							<a className="nav-link nav__item__link" href="/dashboard">
								Habitaciones
							</a>
						</li>
						<li className="nav-item nav__item">
							<a className="nav-link nav__item__link" href="/dashboard">
								Restaurante
							</a>
						</li>
						<li className="nav-item nav__item">
							<a className="nav-link nav__item__link" href="/dashboard">
								Tienda
							</a>
						</li>
						<li className="nav-item nav__item">
							<a className="nav-link nav__item__link" href="/dashboard">
								Contacto
							</a>
						</li>
					</div>
					<li className="nav-item nav__item">
						<BsInfoCircle className="lineHeight__icon" />
						<a className="nav-link nav__item__link" href="/dashboard">
							Estadísticas
						</a>
					</li>
					<li className="nav-item nav__item">
						<BsListTask className="lineHeight__icon" />
						<a className="nav-link nav__item__link" href="/dashboard">
							Gestor de reservas
						</a>
					</li>
					<li className="nav-item nav__item">
						<BsPerson className="lineHeight__icon" />
						<a className="nav-link nav__item__link" href="/dashboard">
							Perfil
						</a>
					</li>
				</ul>
			</div>
			<div className="dashboard__bodyContainer">
				<div className="dashboard__body">body</div>
			</div>
		</div>
	);
};

export default Dashboard;
