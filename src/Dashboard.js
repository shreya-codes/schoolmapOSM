import React,{useContext} from 'react';

import Logo from './image/logo.png'
import SearchBar from './SearchBar.js'
import dataContext from './globalContext';

export default function Dashboard({Point}){
  const {activePark} = useContext(dataContext);
    return (
        <div className='dashboard'>
            <img className='logo' src={Logo} alt="Logo" />
           <SearchBar 
           
           Point={Point}   
           />
        <div className='content'>

        {activePark && (
          <div>
            <li><h2>{activePark.properties.name}</h2></li>
            {activePark.properties.operator && (
              <li>Operator : {activePark.properties.operator}</li>
            )}
            {activePark.properties.phone && (
              <li>Contact no :{activePark.properties.phone}</li>
            )}
            {activePark.properties.physical_condition && (
              <li>Physical Conndition :{activePark.properties.physical_condition}</li>
            )}
            {activePark.properties.studentcount && (
              <li>Student Count : {activePark.properties.studentcount}</li>
            )}
            {activePark.properties.personnelcount && (
              <li>Personnel Count : {activePark.properties.personnelcount}</li>
            )}
            {activePark.properties.iscedlevel && (
              <li>Education Level : {activePark.properties.iscedlevel}</li>
            )}
            </div>
          
        )}

        </div>
      </div>
    )
}