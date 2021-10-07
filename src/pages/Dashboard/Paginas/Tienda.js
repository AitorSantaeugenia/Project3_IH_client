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

const PaginaTiendaDashboard = () => {
	// const [ isLoading, setIsLoading ] = useState(false);
	// Sendin to POST
	const [ nombre, setNombre ] = useState('');
	const [ info, setInfo ] = useState('');
	const [ imagen, setImagen ] = useState('');
	const history = useHistory();
	const [ message, setMessage ] = useState('Tienda creada.');

	//Coming from GET
	const [ infoTienda, setInfoTienda ] = useState('');

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
			.post(`${API_URL}/paginas/tienda`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				// Reset the state to clear the inputs
				setNombre('');
				setInfo('');
				setImagen('');

				setMessage('Hotel creado');

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

	const getAllInfoTienda = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/paginas/tienda`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoTienda(response.data[0]);
				//console.log(response.data[0]);
				//setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllInfoTienda();
	}, []);

	const showOffInfoTienda = () => {
		let showTienda = document.getElementById('menuTienda');
		let showFooterNavTienda = document.getElementById('footerNavTienda');
		//showRestaurante.className += ' hidden';

		if (showTienda.style.display === 'none') {
			showTienda.style.display = 'block';
			showFooterNavTienda.style.display = 'block';
		} else {
			showTienda.style.display = 'none';
			showFooterNavTienda.style.display = 'none';
		}
	};
	return (
		<div>
			<Sidebar />
			{!infoTienda ? (
				<div className="dashboardDiv__container2">
					<h1 className="dashboardDiv__h1">Crea la Tienda</h1>
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
							Crear tienda
						</button>
					</form>
				</div>
			) : (
				//SI EXISTE LA MODIFICAMOS O ELIMINAMOS
				<div className="dashboardDiv__container2">
					<h1 className="dashboardDiv__h1">Modifica la pagina Tienda</h1>
					<form className="formLogin text-center2" onSubmit={HandlseSubmitTienda}>
						<div className="flexRow marginBottomMed">
							<label htmlFor="tiendaactiva" className="text-left">
								Deshabilitar?
							</label>
							<input type="checkbox" name="tiendaactiva" id="tiendaactive" onChange={showOffInfoTienda} />
						</div>
						<div className="flexRow">
							<label className="text-left">Nombre</label>
							<input
								type="text"
								name="nombre"
								value={infoTienda.nombre}
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
								value={infoTienda.info}
								//onChange={(e) => setInfo(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Info..."
							/>
						</div>
						<div className="flexRow">
							<img src={infoTienda.imagen} className="imagenDashboardTienda" />
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
								value={infoTienda._id}
								//onChange={(e) => setInfo(e.target.value)}
								className="form-control maxInputWidth"
								disabled
							/>
						</div>

						<button type="submit" className="btn-submit-login">
							Modificar tienda
						</button>
						<button type="submit" className="btn-submit-login">
							Eliminar tienda
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

export default PaginaTiendaDashboard;
