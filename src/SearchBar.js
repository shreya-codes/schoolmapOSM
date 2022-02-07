import React,{useState,useContext} from 'react';
import dataContext  from './globalContext';

export default function SearchBar({Point}){
    
    const {setActivePark,setLongitude,setLatitude} = useContext(dataContext);
    const [filteredData,setFilteredData]= useState([]);
    const [wordEntered,setWordEntered]=useState("");

    const onClickHandler=(school)=>{
        setWordEntered(school.properties.name)
        setActivePark(school)
        setLatitude(school.geometry.coordinates[0][0][0]);
        setLongitude(school.geometry.coordinates[0][0][1]);  
        setFilteredData([])
    
    }
   
    const handleForm=(e)=>{
        e.preventDefault();
       const school = Point.filter((point)=>{
            return point.properties.name.toLowerCase().includes(wordEntered.toLowerCase());
        })
        setActivePark(school[0])
        setLatitude(school[0].geometry.coordinates[0][0][0]);
        setLongitude(school[0].geometry.coordinates[0][0][1]);    
    }

    const handleFilter=(e)=>{  
        const searchWord=e.target.value;
        setWordEntered(searchWord);
        const newFilter=Point.filter((point)=>{
            return point.properties.name.toLowerCase().includes(searchWord.toLowerCase());
        });
       
        (searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter))
        
    }
    return(
        <div className='search'>
            <form onSubmit={handleForm}>
                <input type='text'
                    placeholder='Search a school'
                    value={wordEntered} 
                    onChange={handleFilter }
                />
                <button type='submit' className='searchButton' >
                    <i className='fas fa-search' ></i>
                </button>
            </form>

       {filteredData.length !==0 && ( 
        <div className='schoolItem'>
            {filteredData.slice(0,2).map((school)=>
                 <div className='schoolList' key={school.id} onClick={()=>onClickHandler(school)}>{school.properties.name}</div>
            )}
         </div>)}
      </div>
    )
}