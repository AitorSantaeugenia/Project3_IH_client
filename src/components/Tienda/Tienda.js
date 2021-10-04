import './Tienda.css';

function TiendaComponente() {
	return (
		<div className="habitacionesDiv__Container">
			<div className="card-deck">
				<div className="card marginBottom">
					<img
						className="card-img-top"
						src="https://www.conexiones365.com/img/blog/tienda-covneniencia-green_leaves_store_yokohama.jpg"
						alt="Room"
					/>
					<div className="card-body">
						<h5 className="card-title">Tienda</h5>
						<p className="card-text">Texto info tienda</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TiendaComponente;
