import { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = process.env.REACT_APP_API_URL;

function LoginPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('Inserta todos los campos.');

	const { logInUser, setUserData } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = (e) => {
		e.preventDefault();

		const requestBody = { email, password };

		axios
			.post(`${API_URL}/auth/login`, requestBody)
			.then((response) => {
				//console.log('JWT token', response.data.authToken);
				const token = response.data.authToken;
				logInUser(token);
				setUserData(response.data.user);
				setErrorMessage('');
				props.history.push('/');
				//console.log(response);
			})
			.catch((error) => {
				const errorDescription = error.response.data.message;
				setErrorMessage(errorDescription);
			});

		toast(`⚠ ${errorMessage}`, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	return (
		<div className="LoginPage">
			<h1 className="h1LoginPage">Login</h1>
			<p>
				Nuevo en <b>Guesthotel</b>?, puedes create una cuenta en <Link to={'/signup'}> Sign Up</Link>
			</p>

			<form onSubmit={handleLoginSubmit} className="formLogin">
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={handleEmail}
					className="form-control"
					placeholder="Email..."
				/>

				<label>Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handlePassword}
					className="form-control"
					placeholder="Password..."
				/>

				<button type="submit" className="btn-submit-login">
					Login
				</button>
			</form>
			{errorMessage && (
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
			)}
		</div>
	);
}

export default LoginPage;
