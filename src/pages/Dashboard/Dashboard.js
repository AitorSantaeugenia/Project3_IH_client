import React from 'react';
//importing sidebar
import Sidebar from '../../components/Sidebar/Sidebar';

function Dashboard() {
	return (
		<div>
			<Sidebar />
			<div className="dashboardDiv__container2">
				<h1>Create your Hotel Webpage</h1>
				<form className="formLogin text-center2">
					<div className="flexRow">
						<label className="text-left">Name</label>
						<input
							type="text"
							name="name"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Estrellas</label>
						<input
							type="number"
							name="estrellas"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Información</label>
						<input
							type="text"
							name="info"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Catchphrase</label>
						<input
							type="text"
							name="catchphrase"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">2º Catchphrase</label>
						<input
							type="text"
							name="catchphrasedos"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Dirección</label>
						<input
							type="text"
							name="direccion"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">CP</label>
						<input
							type="number"
							name="codigopostal"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Teléfono</label>
						<input
							type="text"
							name="telefono"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>
					<div className="flexRow">
						<label className="text-left">Email</label>
						<input
							type="email"
							name="email"
							value="{Name}"
							onChange="{handleName}"
							className="form-control maxInputWidth"
							placeholder="Email..."
						/>
					</div>

					<div>Hotel logo</div>

					<div>Hotel images</div>
					<div>Hotel main image</div>
					{/* <div>Hotel rooms id</div>
					<div>Hotel restaurant id</div>
					<div>Hotel shop id</div> */}
					<div>Hotel reconocimientos images</div>
					<div>Hotel restaurant id</div>
					<div>Hotel comments</div>
				</form>
			</div>
		</div>
	);
}

export default Dashboard;
