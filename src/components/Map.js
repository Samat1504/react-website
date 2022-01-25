import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css'

export class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '300px',
        };
        return (
            <div className="map">
                <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}
                >
                    <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBKL2BvZzmNW7x0fU1VzpnvLcNfqq1aqOY'
})(MapContainer);



