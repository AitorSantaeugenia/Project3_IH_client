//Componentes
import DemoCarousel from '../components/Carousel/Carousel';
import Reservar from '../components/Reservar/Reservar';
import Infohotel from '../components/Infohotel/Infohotel';
import Servicioshotel from '../components/Servicios/Servicioshotel';
import Comentarios from '../components/Comentarios/Comentarios';
import Reconocmientos from '../components/Reconocimientos/Reconocimientos';
import Serviciosreserva from '../components/Serviciosreserva/Serviciosres';
import Mapa from '../components/Mapa/Mapa';

function HomePage() {
	return (
		<div className="carousel__Div">
			<DemoCarousel />
			<Reservar />
			<Infohotel />
			<Servicioshotel />
			<Comentarios />
			<Reconocmientos />
			<Serviciosreserva />
			<Mapa />
		</div>
	);
}

export default HomePage;
