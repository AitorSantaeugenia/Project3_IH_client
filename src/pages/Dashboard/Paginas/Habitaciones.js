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

const PaginaHabsContacto = () => {
	//setters
	const [ nombre, setNombre ] = useState('');
	const [ tipo, setTipo ] = useState('');
	const [ info, setInfo ] = useState('');
	const [ maxguests, setMaxGuests ] = useState('');
	const [ precio, setPrecio ] = useState('');
	const [ cantidad, setCantidad ] = useState('');
	const [ imagen, setImagen ] = useState('');

	//tools
	const history = useHistory();
	const [ message, setMessage ] = useState('Habitación creada.');
	//const [ isLoading, setIsLoading ] = useState(false);

	//Coming from GET
	const [ infoRooms, setInfoRooms ] = useState([]);

	const handleInputFileImage = (e) => {
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

	const HandlseSubmitRooms = (e) => {
		e.preventDefault();

		//setters
		const requestBody = {
			nombre,
			tipo,
			info,
			maxguests,
			precio,
			cantidad,
			imagen
		};

		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.post(`${API_URL}/paginas/habitaciones`, requestBody, {
				headers: { Authorization: `Bearer ${storedToken}` }
			})
			.then((response) => {
				// Reset the state to clear the inputs
				setNombre('');
				setTipo('');
				setInfo('');
				setMaxGuests('');
				setPrecio('');
				setCantidad('');
				setImagen('');

				setMessage('Habitacion creada.');

				// Invoke the callback function coming through the props
				// from the ProjectDetailsPage, to refresh the project details
				history.push('/paginas/habitaciones');
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

	const getAllInfoRooms = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/paginas/habitaciones`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setInfoRooms(response.data);
				console.log(response.data);
				//setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllInfoRooms();
	}, []);

	return (
		<div>
			<Sidebar />
			<div className="dashboardDiv__container2Rooms">
				<h1 className="dashboardDiv__h1">Crear habitación</h1>

				<div>
					<form className="formLogin text-center2" onSubmit={HandlseSubmitRooms}>
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
							<label className="text-left">Tipo</label>
							<input
								type="text"
								name="tipo"
								value={tipo}
								onChange={(e) => setTipo(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Tipo..."
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
							<label className="text-left">Invitados</label>
							<input
								type="number"
								name="maxguests"
								value={maxguests}
								onChange={(e) => setMaxGuests(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Invitados..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Precio</label>
							<input
								type="number"
								name="precio"
								value={precio}
								onChange={(e) => setPrecio(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Precio..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Cantidad</label>
							<input
								type="number"
								name="cantidad"
								value={cantidad}
								onChange={(e) => setCantidad(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Cantidad..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Imagen</label>
							<input
								type="file"
								name="file"
								onChange={handleInputFileImage}
								className="form-control maxInputWidth"
							/>
						</div>

						<button type="submit" className="btn-submit-login">
							Crear habitación
						</button>
					</form>
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
					<div className="separator" />
				</div>
				{infoRooms.length === 0 ? (
					<div className="separator"> Todavía no hay creadas habitaciones.</div>
				) : (
					infoRooms.map((infoRoom) => (
						<div className="card-deck">
							<div className="card marginBottom">
								<img className="card-img-top" src={infoRoom.imagen} alt="Room" />
								<div className="card-body">
									<h5 className="card-title">
										{infoRoom.nombre} - {infoRoom.tipo}
									</h5>
									<p className="card-text">{infoRoom.info}</p>
									<p className="card-text">Invitados: {infoRoom.maxguests}</p>
									<p className="card-text">Precio: {infoRoom.precio}€</p>
									<p className="card-text">Disponibilidad: {infoRoom.cantidad}</p>
									<p className="card-text">{infoRoom._id}</p>
								</div>
								<div className="card-footer">
									<small className="text-muted">
										<button>Editar</button>
										<button>Eliminar</button>
									</small>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default PaginaHabsContacto;
