import React from 'react';

export default function dashboard({Point, activePark, setActivePark}){
    
    if(activePark){
        console.log(activePark)
    }
  
    return (
        <div className='dashboard'>
        <div className='search'>
          <input type='text' placeholder='Search a school'></input>
          <i className='fas fa-search'></i>
        </div>
        <div className='content'>

        {activePark && (
          <div>
            <li>{activePark.properties.name}</li>
            <li>{activePark.properties.operator}</li>
            <li>{activePark.properties.phone}</li>
            <li>{activePark.properties.physical_condition}</li>
          </div>
          
        )}

        </div>
      </div>
    )
}