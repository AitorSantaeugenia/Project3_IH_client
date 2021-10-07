import React from 'react';
import { useState } from 'react';
//importing sidebar
import Sidebar from './../../../components/Sidebar/Sidebar';
// import { Button, Spinner } from 'react-bootstrap';
import UploadService from '../../../services/upload.service';
//Axios usage
import axios from 'axios';
//history
import { useHistory } from 'react-router-dom';
//toastify
import { ToastContainer, toast } from 'react-toastify';
//use Effect needed
import { useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

const PaginaRestauranteDashboard = () => {
	// const [ isLoading, setIsLoading ] = useState(false);
	// Sendin to POST
	const [ nombre, setNombre ] = useState('');
	const [ info, setInfo ] = useState('');
	const [ imagen, setImagen ] = useState('');
	const history = useHistory();
	const [ message, setMessage ] = useState('Restaurante creado.');

	//Coming from GET
	const [ infoRestaurant, setInfoRestaurant ] = useState('');

	const HandlseSubmitTienda = (e) => {
		e.preventDefault();

		//setters
		const requestBody = {
			nombre,
			info,
			imagen
		};

		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.post(`${API_URL}/paginas/restaurante`, requestBody, {
				headers: { Authorization: `Bearer ${storedToken}` }
			})
			.then((response) => {
				// Reset the state to clear the inputs
				setNombre('');
				setInfo('');
				setImagen('');

				setMessage('Restaurante creado');

				// Invoke the callback function coming through the props
				// from the ProjectDetailsPage, to refresh the project details
				history.push('/dashboard');
			})
			.catch((error) => console.log(error));

		//toastify
		toast(`⚠ ${message}`, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	const handleInputFile = (e) => {
		//setIsLoading(true);

		const upload = new UploadService();

		let formData = new FormData();
		formData.append('file', e.target.files[0]);

		upload
			.fileUpload(formData)
			.then((response) => {
				//setIsLoading(false);
				setImagen(response.data.imageUrl);
			})
			.catch((err) => console.log(err));
	};

	const getAllInfoRestaurante = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/paginas/restaurante`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoRestaurant(response.data[0]);
				//console.log(response.data[0]);
				//setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllInfoRestaurante();
	}, []);

	const showOffInfo = () => {
		let showRestaurante = document.getElementById('menuRestaurante');
		let showFooterRestaurante = document.getElementById('footerNavRestaurante');
		//showRestaurante.className += ' hidden';

		if (showRestaurante.style.display === 'none') {
			showRestaurante.style.display = 'block';
			showFooterRestaurante.style.display = 'block';
		} else {
			showRestaurante.style.display = 'none';
			showFooterRestaurante.style.display = 'none';
		}
	};

	return (
		<div>
			<Sidebar />
			{!infoRestaurant ? (
				<div className="dashboardDiv__container2">
					<h1 className="dashboardDiv__h1">Crea el restaurante</h1>
					<form className="formLogin text-center2" onSubmit={HandlseSubmitTienda}>
						<div className="flexRow">
							<label className="text-left">Nombre</label>
							<input
								type="text"
								name="nombre"
								// value="{Name}"
								onChange={(e) => setNombre(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Nombre..."
							/>
						</div>

						<div className="flexRow">
							<label className="text-left">Información</label>
							<input
								type="text"
								name="info"
								// value="{Name}"
								onChange={(e) => setInfo(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Info..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Imagen</label>
							<input
								type="file"
								name="image"
								onChange={handleInputFile}
								className="form-control maxInputWidth"
							/>
						</div>

						<button type="submit" className="btn-submit-login">
							Crear restaurante
						</button>
					</form>
				</div>
			) : (
				//SI EXISTE LA MODIFICAMOS O ELIMINAMOS
				<div className="dashboardDiv__container2">
					<h1 className="dashboardDiv__h1">Modifica la pagina Restaurante</h1>
					<form className="formLogin text-center2" onSubmit={HandlseSubmitTienda}>
						<div className="flexRow marginBottomMed">
							<label htmlFor="restauranteactiva" className="text-left">
								Deshabilitar?
							</label>
							<input
								type="checkbox"
								name="restauranteactiva"
								id="restauranteactiva"
								onChange={showOffInfo}
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Nombre</label>
							<input
								type="text"
								name="nombre"
								value={infoRestaurant.nombre}
								//onChange={(e) => setNombre(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Nombre..."
							/>
						</div>

						<div className="flexRow">
							<label className="text-left">Información</label>
							<input
								type="text"
								name="info"
								value={infoRestaurant.info}
								//onChange={(e) => setInfo(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Info..."
							/>
						</div>
						<div className="flexRow">
							<img src={infoRestaurant.imagen} className="imagenDashboardTienda" />
						</div>
						<div className="flexRow">
							<label className="text-left">Imagen</label>
							<input
								type="file"
								name="image"
								//onChange={handleInputFile}
								className="form-control maxInputWidth"
							/>
						</div>

						<div className="flexRow">
							<label className="text-left">ID</label>
							<input
								type="text"
								name="info"
								value={infoRestaurant._id}
								//onChange={(e) => setInfo(e.target.value)}
								className="form-control maxInputWidth"
								disabled
							/>
						</div>

						<button type="submit" className="btn-submit-login">
							Modificar restaurante
						</button>
						<button type="submit" className="btn-submit-login">
							Eliminar restaurante
						</button>
					</form>
				</div>
			)};
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default PaginaRestauranteDashboard;
