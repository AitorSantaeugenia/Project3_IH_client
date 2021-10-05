import React from 'react';
//importing sidebar
import Sidebar from '../../components/Sidebar/Sidebar';

const Mensajes = () => {
	return (
		<div>
			<Sidebar />
			<div className="dashboardDiv__container">
				<h1>Mensajes</h1>
			</div>
		</div>
	);
};

export default Mensajes;
