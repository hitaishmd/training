import { MapContainer, TileLayer, useMapEvent ,Marker } from "react-leaflet";
import L from 'leaflet';
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import 'leaflet/dist/leaflet.css'
import icon from "leaflet/dist/images/marker-icon.png";
import { coordinateDTO } from "./coordinate.model";
import { useState } from "react";

let defaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
    iconAnchor:[16,37],
});

L.Marker.prototype.options.icon=defaultIcon;



export default function Map(props:mapProps){
    const [coordinates,setCooordinates]=useState<coordinateDTO[]>(props.coordinates);
    return (
        <MapContainer
            center={[18.482214,-69.914311]} 
            zoom={14}
            style={{height:props.height}}>
            <TileLayer 
            attribution="React Movies"
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick setCooordinates={coordinates=>{
                setCooordinates([coordinates]);
                props.handleMapClick(coordinates);
            }}/>
            {coordinates.map((coordinate,index)=><Marker key={index} position={[coordinate.lat,coordinate.lng]}/>)}
        </MapContainer>
    )
}

interface mapClickProps{
    setCooordinates(coordinates:coordinateDTO):void;
}

function MapClick(props:mapClickProps){

    useMapEvent('click',eventArgs=>{
        props.setCooordinates({lat:eventArgs.latlng.lat,lng:eventArgs.latlng.lng})
    })
    return null;
}

interface mapProps{
    height:string;
    coordinates:coordinateDTO[];
    handleMapClick(coordinates:coordinateDTO):void;
}

Map.defaultProps={
    height:'500px'
}