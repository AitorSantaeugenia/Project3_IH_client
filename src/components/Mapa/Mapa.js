import './Mapa.css';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
	render() {
		return (
			// Important! Always set the container height explicitly
			<div className="mapComponent__Googlemap">
				<GoogleMapReact
					bootstrapURLKeys={{ key: process.env.API_KEY }}
					center={{
						lat: 39.8744985,
						lng: 4.293087
					}}
					defaultZoom={15}
				>
					<AnyReactComponent lat={39.8744985} lng={4.293087} text="Hotel name" />
				</GoogleMapReact>
			</div>
		);
	}
}

export default Map;
