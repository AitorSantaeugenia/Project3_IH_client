//Componentes
import ReservarBuscador from '../components/ReservarBuscador/ReservarBuscador';
import Habitaciones from '../components/Habitaciones/Habitaciones';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CarouselSingle/CarouselSingle';

function Hotel() {
	return (
		<div className="carousel__Div">
			<CarouselSingle />
			<ReservarBuscador />
			<Habitaciones />
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Hotel;
