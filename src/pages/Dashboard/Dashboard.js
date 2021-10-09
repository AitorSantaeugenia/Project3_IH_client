import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
//importing sidebar
import Sidebar from '../../components/Sidebar/Sidebar';
// import { Button, Spinner } from 'react-bootstrap';
// import UploadService from '../../services/upload.service';
//Axios usage
import axios from 'axios';
//service for Imagenes
import UploadService from './../../services/upload.service';
//history
import { useHistory } from 'react-router-dom';
//toastify
import { ToastContainer, toast } from 'react-toastify';
import { Table } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL;

function Dashboard() {
	const [ nombre, setNombre ] = useState('');
	const [ stars, setStars ] = useState('');
	const [ info, setInfo ] = useState('');
	const [ catchPhrase, setCatchPhrase ] = useState('');
	const [ catchTwo, setCatchTwo ] = useState('');
	const [ direct, setDirect ] = useState('');
	const [ codigoP, setCodigoP ] = useState('');
	const [ telf, setTelf ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ latitud, setLatitud ] = useState('');
	const [ altitud, setAltitud ] = useState('');
	const [ logo, setLogo ] = useState('');
	const [ image, setImage ] = useState('');
	const [ otherImage, setOtherImage ] = useState('');
	//other consts
	const history = useHistory();
	const [ message, setMessage ] = useState('Hotel creado.');
	const [ hotelInfo, setHotelInfo ] = useState('');

	const HandleSubmitHotel = (e) => {
		e.preventDefault();

		//setters
		const requestBody = {
			nombre,
			stars,
			info,
			catchPhrase,
			catchTwo,
			direct,
			codigoP,
			telf,
			email,
			latitud,
			altitud,
			logo,
			image,
			otherImage
		};

		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.post(`${API_URL}/dashboard`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				// Reset the state to clear the inputs
				setNombre('');
				setStars('');
				setInfo('');
				setCatchPhrase('');
				setCatchTwo('');
				setDirect('');
				setCodigoP('');
				setTelf('');
				setEmail('');
				setLatitud('');
				setAltitud('');
				setLogo('');
				setImage('');
				setOtherImage('');

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

		document.getElementById('botonCrearHotel').style = 'display: none';
	};

	const handleInputFile = (e) => {
		const upload = new UploadService();

		let formData = new FormData();
		formData.append('file', e.target.files[0]);

		upload
			.fileUpload(formData)
			.then((response) => {
				setLogo(response.data.imageUrl);
			})
			.catch((err) => console.log(err));
	};
	const handleInputImage = (e) => {
		const upload = new UploadService();

		let formData = new FormData();
		formData.append('file', e.target.files[0]);

		upload
			.fileUpload(formData)
			.then((response) => {
				setImage(response.data.imageUrl);
			})
			.catch((err) => console.log(err));
	};
	const handleInputImages = (e) => {
		const upload = new UploadService();

		let formData = new FormData();
		formData.append('file', e.target.files[0]);

		upload
			.fileUpload(formData)
			.then((response) => {
				setOtherImage(response.data.imageUrl);
			})
			.catch((err) => console.log(err));
	};

	const getHotelInfo = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/dashboard`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setHotelInfo(response.data[0]);
				console.log(response.data[0]);
			})
			.catch((error) => console.log(error));
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getHotelInfo();
	}, []);

	return (
		<div>
			<Sidebar />
			{hotelInfo ? (
				<div className="dashboardDiv__container2">
					<h1 className="dashboardDiv__h1">Hotel creado con la siguiente información</h1>
					<Table striped bordered hover className="tableDashboardUsers">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>ID</td>
								<td>{hotelInfo._id}</td>
							</tr>
							<tr>
								<td>Nombre</td>
								<td>{hotelInfo.nombre}</td>
							</tr>
							<tr>
								<td>Estrellas</td>
								<td>{hotelInfo.stars}</td>
							</tr>
							<tr>
								<td>Info</td>
								<td>{hotelInfo.info}</td>
							</tr>
							<tr>
								<td>CatchPhrase</td>
								<td>{hotelInfo.catchPhrase}</td>
							</tr>
							<tr>
								<td>CatchPhrase #2</td>
								<td>{hotelInfo.catchTwo}</td>
							</tr>
							<tr>
								<td>Dirección</td>
								<td>{hotelInfo.direct}</td>
							</tr>
							<tr>
								<td>CP</td>
								<td>{hotelInfo.codigoP}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{hotelInfo.email}</td>
							</tr>
							<tr>
								<td>Teléfono</td>
								<td>{hotelInfo.telf}</td>
							</tr>
							<tr>
								<td>Altitud</td>
								<td>{hotelInfo.altitud}</td>
							</tr>
							<tr>
								<td>Latitud</td>
								<td>{hotelInfo.latitud}</td>
							</tr>
							<tr>
								<td>Logo</td>
								<td>{hotelInfo.logo}</td>
							</tr>
							<tr>
								<td>Image</td>
								<td>{hotelInfo.image}</td>
							</tr>
						</tbody>
					</Table>
				</div>
			) : (
				<div className="dashboardDiv__container2">
					<h1 className="dashboardDiv__h1">Crea tu Hotel</h1>
					<form className="formLogin text-center2" onSubmit={HandleSubmitHotel}>
						<div className="flexRow">
							<label className="text-left">Name</label>
							<input
								type="text"
								name="nombre"
								//value={nombre}
								onChange={(e) => setNombre(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Name..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Estrellas</label>
							<input
								type="number"
								name="estrellas"
								//value={stars}
								onChange={(e) => setStars(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Estrellas..."
								min="0"
								max="5"
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Información</label>
							<input
								type="text"
								name="info"
								//value={info}
								onChange={(e) => setInfo(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Info..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Catchphrase</label>
							<input
								type="text"
								name="catchPhrase"
								//value={catchPhrase}
								onChange={(e) => setCatchPhrase(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Catchpharse..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">2º Catchphrase</label>
							<input
								type="text"
								name="catchTwo"
								//value={catchTwo}
								onChange={(e) => setCatchTwo(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Catchpharse 2..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Dirección</label>
							<input
								type="text"
								name="direct"
								//value={direct}
								onChange={(e) => setDirect(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Dirección..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">CP</label>
							<input
								type="number"
								name="codigoP"
								//value={codigoP}
								onChange={(e) => setCodigoP(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Código postal..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Teléfono</label>
							<input
								type="text"
								name="telf"
								//value={telf}
								onChange={(e) => setTelf(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Telefono..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Email</label>
							<input
								type="email"
								name="email"
								//value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Email..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Altitud</label>
							<input
								type="text"
								name="altitud"
								//value={altitud}
								onChange={(e) => setAltitud(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Altitud..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Latitud</label>
							<input
								type="text"
								name="latitud"
								//value={latitud}
								onChange={(e) => setLatitud(e.target.value)}
								className="form-control maxInputWidth"
								placeholder="Latitud..."
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Logo</label>
							<input
								type="file"
								name="logo"
								//value={logo}
								onChange={handleInputFile}
								className="form-control maxInputWidth"
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Imagen principal</label>
							<input
								type="file"
								name="image"
								onChange={handleInputImage}
								className="form-control maxInputWidth"
							/>
						</div>
						<div className="flexRow">
							<label className="text-left">Imagenes</label>
							<input
								type="file"
								name="otherImage"
								onChange={handleInputImages}
								className="form-control maxInputWidth"
							/>
						</div>
						<button type="submit" className="btn-submit-login" id="botonCrearHotel">
							Crear hotel
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
				</div>
			)}
		</div>
	);
}

export default Dashboard;
