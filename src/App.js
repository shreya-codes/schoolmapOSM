import React from 'react';
import Map from './Map.js';
import Dashboard from './Dashboard.js'
import './App.css';


export default function App() {
  return (
    <div className='wrapper'>
      <Dashboard/>
      <div className='container'>
        <Map />
      </div>
    </div>
  );
}
