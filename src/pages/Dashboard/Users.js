import React from 'react';
//importing sidebar
import Sidebar from '../../components/Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Spinner } from 'react-bootstrap';
//history
import { useHistory } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const Usuarios = () => {
	const [ users, setUsers ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ idUser ] = useState('');

	const history = useHistory();

	const getAllUsers = () => {
		// Get the token from the localStorage
		const storedToken = localStorage.getItem('authToken');

		// Send the token through the request "Authorization" Headers
		axios
			.get(`${API_URL}/dashboard/usuarios`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then((response) => {
				setUsers(response.data);
				//console.log(response);
				setIsLoading(true);
			})
			.catch((error) => console.log(error));
	};

	const handleDeleteUser = (idUser) => {
		const storedToken2 = localStorage.getItem('authToken');

		axios
			.delete(`${API_URL}/dashboard/usuarios/${idUser}`, {
				headers: { Authorization: `Bearer ${storedToken2}` }
			})
			.then((response) => {
				//console.log(response.data);
				const filteredUser = users.filter((element) => element._id !== idUser);
				setUsers(filteredUser);

				history.push('/dashboard/usuarios');
			});
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<div>
			<Sidebar />
			<div className="dashboardDivUsers__container">
				<h1>Usuarios</h1>
				{isLoading ? (
					<Table striped bordered hover className="tableDashboardUsers">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Rol</th>
								<th>Acción</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user._id}>
									<td>{user._id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.rol}</td>
									<td>
										<button>Editar</button>
										<input type="hidden" name="idUser" value={user._id} />
										<button
											onClick={() => {
												handleDeleteUser(user._id);
											}}
										>
											Eliminar
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<Spinner animation="border" role="status" className="margin50__bottom">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				)}
			</div>
		</div>
	);
};

export default Usuarios;
