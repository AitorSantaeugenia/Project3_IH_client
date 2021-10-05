import { useContext } from 'react'; // <== IMPORT
import { AuthContext } from '../../context/auth.context'; // <== IMPORT
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavbarMenu.css';
//history
import { useHistory } from 'react-router-dom';

function NavbarMenu() {
	// Subscribe to the AuthContext to gain access to
	// the values from AuthContext.Provider `value` prop
	const { isLoggedIn, user, userData, logOutUser } = useContext(AuthContext);
	//dom history to redirect
	const history = useHistory();

	const toHome = (e) => {
		history.push('/');
	};
	const toRooms = (e) => {
		history.push('/habitaciones');
	};
	const toRestaurante = (e) => {
		history.push('/restaurante');
	};
	const toTienda = (e) => {
		history.push('/tienda');
	};
	const toContacto = (e) => {
		history.push('/contacto');
	};
	const toSignup = (e) => {
		history.push('/signup');
	};
	const toLogin = (e) => {
		history.push('/login');
	};
	const toDashboard = (e) => {
		history.push('/dashboard');
	};
	const toUserProfile = () => {
		history.push('/perfil');
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>Hotel name</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link onClick={toHome}>Home</Nav.Link>
						<Nav.Link onClick={toRooms}>Habitaciones</Nav.Link>
						<Nav.Link onClick={toRestaurante}>Restaurante</Nav.Link>
						<Nav.Link onClick={toTienda}>Tienda</Nav.Link>
						<Nav.Link onClick={toContacto}>Contacto</Nav.Link>
					</Nav>
					<Nav>
						{isLoggedIn ? (
							<div className="flexDisplay">
								<Nav.Link onClick={toDashboard}>Dashboard</Nav.Link>
								<Nav.Link href="/" onClick={logOutUser}>
									Logout
								</Nav.Link>1 6s{' '}
								<Nav.Link className="noPointer">
									<span className="welcome__User">Welcome, {user.name}</span>
								</Nav.Link>
								<Nav.Link className="noPointer">
									<img
										src={userData.image}
										className="imgAvatar"
										alt="avatar"
										onClick={toUserProfile}
										style={{ pointerEvents: 'all' }}
									/>
								</Nav.Link>
							</div>
						) : (
							<div className="flexDisplay">
								<Nav.Link onClick={toSignup}>Signup</Nav.Link>
								<Nav.Link onClick={toLogin}>Login</Nav.Link>
							</div>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarMenu;
