import React from 'react';
import Map from './Map.js';
import Dashboard from './Dashboard.js'
import './App.css';
import * as schools from './data/export.json';

export default function App() {
  const [activePark, setActivePark] = React.useState(null);
  const[term,setTerm]=React.useState('');
  
  let Polygon = schools.features.filter(
    (school) => school.geometry.type === 'Polygon' && school.properties.name
  );
  let Point = schools.features.filter(
    (school) => school.geometry.type === 'Point' && school.properties.name
  );
 
  return (
    <div className='wrapper'>
      <Dashboard 
       activePark={activePark}
       setActivePark={setActivePark}
       Point={Point}
      />
      <div className='container'>
        <Map 
        Polygon ={Polygon}
         Point={Point}
         activePark={activePark}
         setActivePark={setActivePark} 
         term={term}
       setTerm={setTerm}
        />
      </div>
    </div>
  );
}
