//Componentes
import ReservarBuscador from '../components/ReservarBuscador/ReservarBuscador';
import RestauranteComponent from '../components/Restaurante/Restaurante';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CarouselSingle/CarouselSingle';

function Restaurante() {
	return (
		<div className="carousel__Div">
			<CarouselSingle />
			<ReservarBuscador />
			<RestauranteComponent />
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Restaurante;
