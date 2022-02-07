import React from 'react';

import Map from './Map.js';
import Dashboard from './Dashboard.js'
import './App.css';
import {DataProvider} from './globalContext';
import * as schools from './data/export.json';

export default function App() {
  

  let Point = schools.features.filter(
    (school) => school.geometry.type === 'Polygon' && school.properties.name
  );
  
 
  return (
    <DataProvider>
      <div className='wrapper'>
        <Dashboard 
        
        Point={Point}
        />
        <div className='container'>
          <Map 
         
          Point={Point}
          
          />
        </div>
      </div>
    </DataProvider>
  );
}
