import React from 'react';
import { useContext } from 'react'; // <== IMPORT
import { useState } from 'react';
//importing sidebar
import Sidebar from '../../components/Sidebar/Sidebar';
import { Button, Spinner } from 'react-bootstrap';
import UploadService from '../../services/upload.service';
//auto user
import { AuthContext } from '../../context/auth.context'; // <== IMPORT

const Perfil = () => {
	//const [ isLoading, setIsLoading ] = useState(false);
	const { isLoggedIn, user, userData, logOutUser } = useContext(AuthContext);
	//const [ image, setImage ] = useState('');

	// const handleInputFile = (e) => {
	// 	setIsLoading(true);

	// 	const upload = new UploadService();

	// 	let formData = new FormData();
	// 	formData.append('file', e.target.files[0]);

	// 	upload
	// 		.fileUpload(formData)
	// 		.then((response) => {
	// 			setIsLoading(false);
	// 			setImage(response.data.imageUrl);
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	return (
		<div>
			<Sidebar />
			<div className="dashboardDiv__container2">
				<h1 className="dashboardDiv__h1">Perfil de usuario</h1>
				<div className="formLogin text-center2">
					<div className="flexRow">
						{userData.image ? (
							<img
								src={userData.image}
								className="imgAvatarProfile"
								alt="avatar"
								style={{ pointerEvents: 'all' }}
							/>
						) : null}
					</div>
				</div>
				<form className="formLogin text-center2">
					<div className="flexRow">
						<label className="text-left">Name</label>
						<input
							type="text"
							name="name"
							value={user.name}
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Nombre..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Email</label>
						<input
							type="email"
							name="email"
							value={user.email}
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow hidden">
						<label className="text-left">ID</label>
						<input
							type="email"
							name="email"
							value={user._id}
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Imagen</label>
						<input
							type="file"
							name="file"
							//onChange={handleInputFile}
							className="form-control maxInputWidth"
						/>
					</div>
					<button type="submit" className="btn-submit-login">
						Actualizar perfil
					</button>
				</form>
			</div>
		</div>
	);
};

export default Perfil;
