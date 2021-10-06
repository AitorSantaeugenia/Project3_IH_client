import React from 'react';
//importing sidebar
import Sidebar from '../../components/Sidebar/Sidebar';

const Soporte = () => {
	return (
		<div>
			<Sidebar />
			<div className="dashboardDiv__container2">
				<h1 className="dashboardDiv__h1">Soporte</h1>
				<form id="contact-form2" method="POST" className="formLogin text-center2">
					<div className="flexRow">
						<label htmlFor="name" className="text-left">
							Nombre
						</label>
						<input type="text" className="form-control maxInputWidth" placeholder="Nombre..." />
					</div>
					<div className="flexRow">
						<label htmlFor="exampleInputEmail1" className="text-left">
							Email
						</label>
						<input
							type="email"
							className="form-control maxInputWidth"
							aria-describedby="emailHelp"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label htmlFor="exampleInputEmail1" className="text-left">
							Asunto
						</label>
						<input type="text" className="form-control maxInputWidth" placeholder="Asunto..." />
					</div>
					<div className="flexRow">
						<label htmlFor="message" className="text-left">
							Mensaje
						</label>
						<textarea className="form-control no-resize maxInputWidth" rows="5" placeholder="Mensaje..." />
					</div>
					<div className="flexRowLeft">
						<button type="submit" className="btn-submit-login">
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Soporte;
