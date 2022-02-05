import React from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import * as schools from './data/export.json';

export default function MapTile(){
    const [activePark, setActivePark] = React.useState(null);
    // let Polygon = schools.features.filter(
    //   (school) => school.geometry.type === 'Polygon' && school.properties.name
    // );
    let Point = schools.features.filter(
      (school) => school.geometry.type === 'Point' && school.properties.name
    );
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
                <h3> {activePark.properties.name}</h3>

                <p> {activePark.properties.operator}</p>
              </div>
            </Popup>
          
         
          )}
        </Map>
    )
  
}