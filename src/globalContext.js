import React,{useState,createContext} from 'react';

const dataContext = createContext();

export const DataProvider = ({children}) => {

const[longitude,setLongitude]=useState( 27.8801026);
const[latitude,setLatitude]=useState(85.48741);
const [activePark, setActivePark] = React.useState(null)
  
    return(
        <dataContext.Provider value={{longitude,setLongitude,latitude,setLatitude,activePark,setActivePark}}>
            {children}
        </dataContext.Provider>
    )
}

export default dataContext;