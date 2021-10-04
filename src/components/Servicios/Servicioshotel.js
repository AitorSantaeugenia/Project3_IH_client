import React from 'react';
import './Servicioshotel.css';
//React bootstrap
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Card';

const Servicioshotel = () => {
	return (
		<div class="card-group">
			<div class="card">
				<img
					class="card-img-top serviciosHotel__img"
					src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/d2/af/hotel-r-de-paris.jpg?w=900&h=-1&s=1"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h5 class="card-title">Habitaciones</h5>
					<p class="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
				</div>
			</div>
			<div class="card">
				<img
					class="card-img-top serviciosHotel__img"
					src="https://www.vinccihoteles.com/sites/default/files/styles/flexslider_full/public/foto-34-restaurante-desayuno.jpg?itok=BiLWei23"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h5 class="card-title">Restaurante</h5>
					<p class="card-text">
						This card has supporting text below as a natural lead-in to additional content.
					</p>
				</div>
			</div>
			<div class="card">
				<img
					class="card-img-top serviciosHotel__img"
					src="https://www.conexiones365.com/img/blog/tienda-covneniencia-green_leaves_store_yokohama.jpg"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h5 class="card-title">Tienda</h5>
					<p class="card-text">
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
<div class="card-group">
			<div class="card">
				<img class="card-img-top" src="..." alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						content is a little bit longer.
					</p>
					<p class="card-text">
						<small class="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
			<div class="card">
				<img class="card-img-top" src="..." alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This card has supporting text below as a natural lead-in to additional content.
					</p>
					<p class="card-text">
						<small class="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
			<div class="card">
				<img class="card-img-top" src="..." alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This
						card has even longer content than the first to show that equal height action.
					</p>
					<p class="card-text">
						<small class="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
		</div>
*/
