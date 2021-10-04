import React from 'react';
import './Infohotel.css';
import { BsFillStarFill } from 'react-icons/bs';

const Infohotel = () => {
	return (
		<div className="divInfoHotel__Container">
			<div className="divInfoHotel__HotelName">Hotel name</div>
			<div className="divInfoHotel__Stars">
				<BsFillStarFill className="react-icons__Star" />
				<BsFillStarFill className="react-icons__Star" />
				<BsFillStarFill className="react-icons__Star" />
				<BsFillStarFill className="react-icons__Star" />
			</div>
			<div className="divInfoHotel__Catchphrase">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			<div className="divInfoHotel__InfoHotel">
				" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor, nibh eget scelerisque
				pretium, quam ex volutpat magna, in hendrerit ex ligula in mauris. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Fusce porttitor, nibh eget scelerisque pretium, quam ex volutpat magna, in
				hendrerit ex ligula in mauris. "
			</div>
			<div className="separator" />
		</div>
	);
};

export default Infohotel;
