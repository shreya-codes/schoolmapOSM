import React from 'react';
import Map from './Map.js';
import Dashboard from './Dashboard.js'
import './App.css';
import * as schools from './data/export.json';

export default function App() {
  const [activePark, setActivePark] = React.useState(null);
  // let Polygon = schools.features.filter(
  //   (school) => school.geometry.type === 'Polygon' && school.properties.name
  // );
  let Point = schools.features.filter(
    (school) => school.geometry.type === 'Point' && school.properties.name
  );
  return (
    <div className='wrapper'>
      <Dashboard  Point={Point} activePark={activePark} setActivePark={setActivePark}/>
      <div className='container'>
        <Map Point={Point} activePark={activePark} setActivePark={setActivePark} />
      </div>
    </div>
  );
}
