import React from 'react';
import { useState } from 'react';
//importing sidebar
import Sidebar from './../../../components/Sidebar/Sidebar';
import { Button, Spinner } from 'react-bootstrap';
import UploadService from '../../../services/upload.service';
//Axios usage
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const PaginaHotelDashboard = () => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ image, setImage ] = useState('');

	const handleInputFile = (e) => {
		setIsLoading(true);

		const upload = new UploadService();

		let formData = new FormData();
		formData.append('file', e.target.files[0]);

		upload
			.fileUpload(formData)
			.then((response) => {
				setIsLoading(false);
				setImage(response.data.imageUrl);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<Sidebar />
			<div className="dashboardDiv__container2">
				<h1 className="dashboardDiv__h1">Modifica tu Hotel</h1>
				<form className="formLogin text-center2">
					<div className="flexRow">
						<label className="text-left">Name</label>
						<input
							type="text"
							name="name"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Name..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Estrellas</label>
						<input
							type="number"
							name="estrellas"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Estrellas..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Información</label>
						<input
							type="text"
							name="info"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Info..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Catchphrase</label>
						<input
							type="text"
							name="catchphrase"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Catchpharse..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">2º Catchphrase</label>
						<input
							type="text"
							name="catchphrasedos"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Catchpharse 2..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Dirección</label>
						<input
							type="text"
							name="direccion"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Dirección..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">CP</label>
						<input
							type="number"
							name="codigopostal"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Código postal..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Teléfono</label>
						<input
							type="text"
							name="telefono"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Telefono..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Email</label>
						<input
							type="email"
							name="email"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Altitud</label>
						<input
							type="text"
							name="altitud"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Altitud..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Latitud</label>
						<input
							type="text"
							name="latitud"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Latitud..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Logo</label>
						<input
							type="file"
							name="file"
							onChange={handleInputFile}
							className="form-control maxInputWidth"
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Imagen principal</label>
						<input
							type="file"
							name="file"
							onChange={handleInputFile}
							className="form-control maxInputWidth"
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Imagenes</label>
						<input
							type="file"
							name="file"
							onChange={handleInputFile}
							className="form-control maxInputWidth"
						/>
					</div>
					<button type="submit" className="btn-submit-login">
						Crear hotel
					</button>
				</form>
			</div>
		</div>
	);
};

export default PaginaHotelDashboard;
