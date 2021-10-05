//import Sidebar
import Sidebar from '../Sidebar/Sidebar';

import './Dashboard.css';
//icons react bootstrap

const Dashboard = () => {
	return (
		<div>
			<Sidebar />
			<div className="dashboardDiv__container">
				<h1>Create your Hotel Webpage</h1>
				<div>Hotel name</div>
				<div>Hotel stars</div>
				<div>Hotel logo</div>
				<div>Hotel info</div>
				<div>Hotel catchphrase1</div>
				<div>Hotel catchphrase2</div>
				<div>Hotel direction</div>
				<div>Hotel CP</div>
				<div>Hotel telefono</div>
				<div>Hotel email</div>
				<div>Hotel images</div>
				<div>Hotel main image</div>
				<div>Hotel rooms id</div>
				<div>Hotel restaurant id</div>
				<div>Hotel shop id</div>
				<div>Hotel reconocimientos images</div>
				<div>Hotel restaurant id</div>
				<div>Hotel comments</div>
			</div>
		</div>
	);
};

export default Dashboard;

/*
return (
		<div className="dashboardDiv__Container">
			<div className="dashboardDiv__Panel">
				<h3 className="dashboardDiv__title">Guest Hotel</h3>
				<div className="separator2" />
				<ul className="nav flex-column">
					<li className="nav-item nav__item">
						<BsHouseDoor className="lineHeight__icon" />
						// eslint-disable-next-line 
						<a className="nav-link nav__item__link " onClick={toggleClass}>
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
				<div className="dashboard__body">
					<div className={isActive ? 'hidden' : null}>TEST</div>
				</div>
			</div>
		</div>
*/
