import React,{useContext} from 'react';
import Search from "react-leaflet-search";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import dataContext from './globalContext'

export default function MapTile({Point}){
  const {longitude,latitude,activePark,setActivePark} = useContext(dataContext)
 
    return (
        <Map center={[ longitude, latitude]} zoom={12}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

           {Point.map((point) => ( 
            <Marker
              key={point.id}
              position={[
                point.geometry.coordinates[0][0][1],
                point.geometry.coordinates[0][0][0],
              ]}
              onClick={() => {
                setActivePark(point);         
              }}
            />
          ))} 
          <Search
          position="topleft"
          inputPlaceholder="Search School"
          zoom={18}
          closeResultsOnClick={true}
          />
          {activePark && activePark.geometry.type==="Polygon" && (
            <Popup
              position={[
                activePark.geometry.coordinates[0][0][1],
                activePark.geometry.coordinates[0][0][0],
              ]}
              onClose={() => {
                setActivePark(null);
             
              }}
            >
              <div>
                <h3>{activePark.properties.name}</h3>

                <p> {activePark.properties.operator}</p>
              </div>
            </Popup>
          )}
           
        </Map>
    )
  
}