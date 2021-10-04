import { Link } from 'react-router-dom';
import { useContext } from 'react'; // <== IMPORT
import { AuthContext } from '../../context/auth.context'; // <== IMPORT
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavbarMenu.css';

function NavbarMenu() {
	// Subscribe to the AuthContext to gain access to
	// the values from AuthContext.Provider `value` prop
	const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">Hotel name</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/hotel">Hotel</Nav.Link>
						<Nav.Link href="/restaurante">Restaurante</Nav.Link>
						<Nav.Link href="/tienda">Tienda</Nav.Link>
						<Nav.Link href="/contacto">Contact</Nav.Link>
					</Nav>
					<Nav>
						{isLoggedIn ? (
							<div className="flexDisplay">
								<Nav.Link href="/dashboard">Dashboard</Nav.Link>
								<Nav.Link>
									<span className="welcome__User">Welcome, {user.name}</span>
								</Nav.Link>
								<button onClick={logOutUser}>Logout</button>
							</div>
						) : (
							<div>
								<Link to="/signup">
									{' '}
									<button>Signup</button>{' '}
								</Link>
								<Link to="/login">
									{' '}
									<button>Login</button>{' '}
								</Link>
							</div>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarMenu;

/*
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


	<nav>
			<Link to="/">
				<button>Home</button>
			</Link>
			-
			{isLoggedIn ? (
				<div>
					<Link to="/projects">
						<button>Projects</button>
					</Link>
					<button onClick={logOutUser}>Logout</button>
					<span>{user.name}</span>
				</div>
			) : (
				<div>
					<Link to="/signup">
						{' '}
						<button>Signup</button>{' '}
					</Link>
					<Link to="/login">
						{' '}
						<button>Login</button>{' '}
					</Link>
				</div>
			)}
		</nav>


    	<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
*/
