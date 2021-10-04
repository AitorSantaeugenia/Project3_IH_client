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
import Hotel from './pages/Hotel';
import Restaurante from './pages/Restaurante';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="main__Body">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/hotel" component={Hotel} />
					<Route exact path="/restaurante" component={Restaurante} />
					<Route exact path="/tienda" component={Tienda} />
					<Route exact path="/contacto" component={Contacto} />

					{/* 👇 UPDATE THE EXISTING ROUTES 👇  */}
					<PrivateRoute exact path="/dashboard" component={Dashboard} />

					<AnonRoute exact path="/signup" component={SignupPage} />
					<AnonRoute exact path="/login" component={LoginPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
