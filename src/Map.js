import React from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



export default function MapTile({Point, activePark, setActivePark}){
 
    return (
        <Map center={[27.7120406, 85.2878096]} zoom={16}>
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
        
          {activePark && (
              
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