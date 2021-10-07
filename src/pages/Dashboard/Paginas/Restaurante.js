import React from 'react';
import { useState } from 'react';
//importing sidebar
import Sidebar from './../../../components/Sidebar/Sidebar';
import { Button, Spinner } from 'react-bootstrap';
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
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isLoadingImg, setIsLoadingImg ] = useState(false);
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

				setInfoRestaurant(response.data);

				// Invoke the callback function coming through the props
				// from the ProjectDetailsPage, to refresh the project details
				history.push('/paginas/restaurante');
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
		setIsLoadingImg(true);

		upload
			.fileUpload(formData)
			.then((response) => {
				setImagen(response.data.imageUrl);
				setIsLoadingImg(false);
			})
			.catch((err) => console.log(err));
	};

	const getAllInfoRestaurante = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');
		setIsLoading(true);
		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/paginas/restaurante`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoRestaurant(response.data[0]);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	};

	const handleDeleteRestaurante = (idRestaurante) => {
		const storedToken2 = localStorage.getItem('authToken');

		//console.log(idRestaurante);

		axios
			.delete(`${API_URL}/paginas/restaurante/${idRestaurante}`, {
				headers: { Authorization: `Bearer ${storedToken2}` }
			})
			.then((response) => {
				//console.log(response.data);
				//const filteredRestaurante = infoRestaurant.filter((element) => element._id !== idRestaurante);
				setInfoRestaurant('');

				history.push('/paginas/restaurante');
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
			{isLoading ? (
				<Spinner animation="border" role="status" className="margin50__bottom margin50__top">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			) : !infoRestaurant ? (
				<div className="dashboardDiv__container2">
					<h1 className="dashboardDiv__h1">Crea el restaurante</h1>
					<form className="formLogin text-center2" onSubmit={HandlseSubmitTienda}>
						<div className="flexRow">
							<label className="text-left">Nombre</label>
							<input
								type="text"
								name="nombre"
								value={nombre}
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
								value={info}
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
						{isLoadingImg ? (
							<Button variant="primary" disabled>
								<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
								Loading...
							</Button>
						) : (
							<button type="submit" className="btn-submit-login">
								Crear restaurante
							</button>
						)}
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
						{/* <button type="submit" className="btn-submit-login">
							Modificar restaurante
						</button> */}
					</form>
					<button
						className="btn-submit-login marginLesser20"
						onClick={() => {
							handleDeleteRestaurante(infoRestaurant._id);
						}}
					>
						Eliminar restaurante
					</button>
				</div>
			)}
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
