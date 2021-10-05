import React from 'react';
import { useState } from 'react';
//importing sidebar
import Sidebar from './../../../components/Sidebar/Sidebar';
import { Button, Spinner } from 'react-bootstrap';
import UploadService from '../../../services/upload.service';

const PaginaHabsContacto = () => {
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
				<h1 className="dashboardDiv__h1">Modifica la pagina Habitaciones</h1>
				<form className="formLogin text-center2">
					<div className="flexRow">
						<label for="roomactiva" className="text-left">
							Habilitada?
						</label>
						<input type="checkbox" name="roomactiva" id="roomactiva" />
					</div>
					<div className="flexRow">
						<label className="text-left">Nombre</label>
						<input
							type="text"
							name="name"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Nombre..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Tipo</label>
						<input
							type="text"
							name="tipo"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Tipo..."
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
						<label className="text-left">Precio</label>
						<input
							type="number"
							name="precio"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Precio..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Cantidad</label>
						<input
							type="number"
							name="cantidad"
							// value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Cantidad..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Imagen</label>
						<input
							type="file"
							name="file"
							onChange={handleInputFile}
							className="form-control maxInputWidth"
						/>
					</div>

					<button type="submit" className="btn-submit-login">
						Crear habitación
					</button>
				</form>
			</div>
		</div>
	);
};

export default PaginaHabsContacto;
