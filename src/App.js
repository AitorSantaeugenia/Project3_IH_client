import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import Nav from './components/NavbarMenu/NavbarMenu.js';
import PrivateRoute from './components/PrivateRoute'; // <== IMPORT
import AnonRoute from './components/AnonRoute'; // <== IMPORT
import Footer from './components/Footer/Footer.js';

//pages
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

//Pages hotels
import Habitaciones from './pages/Hotel';
import Restaurante from './pages/Restaurante';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';

//Pages dashboard
import Paginas from './pages/Dashboard/Paginas';
import PaginasHotel from './pages/Dashboard/Paginas/Hotel';
import PaginasHabitaciones from './pages/Dashboard/Paginas/Habitaciones';
import PaginasRestaurante from './pages/Dashboard/Paginas/Restaurante';
import PaginasTienda from './pages/Dashboard/Paginas/Tienda';
import PaginasContacto from './pages/Dashboard/Paginas/Contacto';

//Dashboard
import Dashboard from './pages/Dashboard/Dashboard';
import Usuarios from './pages/Dashboard/Users';
import Estadisticas from './pages/Dashboard/Estadisticas';

//Dashboard otros
import Gestor from './pages/Dashboard/Gestor';
import Mensajes from './pages/Dashboard/Mensajes';
import Perfil from './pages/Dashboard/Perfil';
import Soporte from './pages/Dashboard/Soporte';

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="main__Body">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/habitaciones" component={Habitaciones} />
					<Route exact path="/restaurante" component={Restaurante} />
					<Route exact path="/tienda" component={Tienda} />
					<Route exact path="/contacto" component={Contacto} />
					<Route exact path="/reservas" component={Contacto} />
					{/* Dashboard */}
					{/* Paginas */}
					<PrivateRoute path="/paginas" exact component={Paginas} />
					<PrivateRoute path="/paginas/hotel" exact component={PaginasHotel} />
					<PrivateRoute path="/paginas/habitaciones" exact component={PaginasHabitaciones} />
					<PrivateRoute path="/paginas/restaurante" exact component={PaginasRestaurante} />
					<PrivateRoute path="/paginas/tienda" exact component={PaginasTienda} />
					<PrivateRoute path="/paginas/contacto" exact component={PaginasContacto} />
					{/* Dashboard */}
					<PrivateRoute exact path="/dashboard" component={Dashboard} />
					<PrivateRoute exact path="/dashboard/usuarios" component={Usuarios} />
					<PrivateRoute exact path="/dashboard/estadisticas" component={Estadisticas} />
					{/* Dashboard otras */}
					<PrivateRoute exact path="/gestor" component={Gestor} />
					<PrivateRoute exact path="/perfil" component={Perfil} />
					<PrivateRoute exact path="/mensajes" component={Mensajes} />
					<PrivateRoute exact path="/soporte" component={Soporte} />

					{/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
					<AnonRoute exact path="/signup" component={SignupPage} />
					<AnonRoute exact path="/login" component={LoginPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
