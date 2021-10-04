//Componentes
import ReservarBuscador from '../components/Reservar/Reservar';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';
import CarouselSingle from '../components/CarouselSingle/CarouselSingle';
import ContactForm from '../components/Contacto/Contacto';

function Contacto() {
	return (
		<div className="carousel__Div">
			<CarouselSingle />
			<ReservarBuscador />
			<ContactForm />

			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default Contacto;
