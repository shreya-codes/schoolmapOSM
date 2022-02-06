import React from 'react';
import Search from "react-leaflet-search";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



export default function MapTile({Polygon,Point, activePark, setActivePark,term,setTerm}){
 console.log(term)
    return (
        <Map center={[ 27.6801026, 85.34741]} zoom={15}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

           {Point.map((point) => (
            <Marker
              key={point.id}
              position={[
                point.geometry.coordinates[1],
                point.geometry.coordinates[0],
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
        
        
          {activePark && activePark.geometry.type==="Point" && (
              
            <Popup
              position={[
                activePark.geometry.coordinates[1],
                activePark.geometry.coordinates[0],
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