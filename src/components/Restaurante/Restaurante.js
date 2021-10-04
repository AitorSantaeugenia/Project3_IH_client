import './Restaurante.css';

function RestauranteComponent() {
	return (
		<div className="habitacionesDiv__Container">
			<div className="card-deck">
				<div className="card marginBottom">
					<img
						className="card-img-top"
						src="https://www.vinccihoteles.com/sites/default/files/styles/flexslider_full/public/foto-34-restaurante-desayuno.jpg?itok=BiLWei23"
						alt="Room"
					/>
					<div className="card-body">
						<h5 className="card-title">Titulo restaurante</h5>
						<p className="card-text">Texto info restaurante</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							<a className="noDecoration" href="/reservar/:id">
								Reservar
							</a>
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RestauranteComponent;
