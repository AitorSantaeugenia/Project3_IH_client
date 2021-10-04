import ReservarBuscador from '../components/Reservar/Reservar';
import TiendaComponente from '../components/Tienda/Tienda';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CarouselSingle/CarouselSingle';

function Tienda() {
	return (
		<div className="carousel__Div">
			<CarouselSingle />
			<ReservarBuscador />
			<TiendaComponente />
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Tienda;
