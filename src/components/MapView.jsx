import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/components/MapView.scss';
import {IconLocation} from './IconLocation'

const MapView = () => (
    <MapContainer center={{lat: '10.4035983', lng: '-75.5147442'}} zoom={20} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={{lat: '10.4035983', lng: '-75.5147442'}} icon={IconLocation}/>
    </MapContainer>
);

export default MapView;