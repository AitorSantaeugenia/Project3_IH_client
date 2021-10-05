import './ReservarBuscador.css';
//history
import { useHistory } from 'react-router-dom';

function ReservarBuscador() {
	const history = useHistory();

	const toReservas = (e) => {
		history.push('/reservas');
	};

	return (
		<div className="reservar__divContainer">
			<div className="reservar__bigText">
				{/* eslint-disable-next-line */}
				<a onClick={toReservas} className="yesPointer">
					BUSCADOR
				</a>{' '}
				|
			</div>
			<div className="reservar__smallText">
				<span>Reserva con nosotros</span>
				<span>Siempre al mejor precio</span>
			</div>
		</div>
	);
}

export default ReservarBuscador;
