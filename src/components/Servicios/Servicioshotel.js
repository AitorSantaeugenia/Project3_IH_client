import React from 'react';
import './Servicioshotel.css';

const Servicioshotel = () => {
	return (
		<div className="card-group">
			<div className="card transform">
				<img
					className="card-img-top serviciosHotel__img"
					src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
					alt="Card cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Habitaciones</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
				</div>
			</div>
			<div className="card transform">
				<img
					className="card-img-top serviciosHotel__img"
					src="https://www.vinccihoteles.com/sites/default/files/styles/flexslider_full/public/foto-34-restaurante-desayuno.jpg?itok=BiLWei23"
					alt="Card cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Restaurante</h5>
					<p className="card-text">
						This card has supporting text below as a natural lead-in to additional content.
					</p>
				</div>
			</div>
			<div className="card transform">
				<img
					className="card-img-top serviciosHotel__img"
					src="https://www.conexiones365.com/img/blog/tienda-covneniencia-green_leaves_store_yokohama.jpg"
					alt="Card cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Tienda</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Servicioshotel;

/*
<div className="card-group">
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This card has supporting text below as a natural lead-in to additional content.
					</p>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</p>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
		</div>
*/
