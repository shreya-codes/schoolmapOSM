import React,{useState} from 'react';

export default function SearchBar({activePark ,setActivePark,Point}){
    const [filteredData,setFilteredData]= useState([]);
    const [wordEntered,setWordEntered]=useState("");
    const handleFilter=(e)=>{
        
        const searchWord=e.target.value;
        setWordEntered(searchWord);
        const newFilter=Point.filter((point)=>{
            return point.properties.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord===""){
            setFilteredData([])
        }
        else{
            setFilteredData(newFilter)
        }
        
    }
    return(
        <div className='search'>
        <input type='text'
         placeholder='Search a school'
         value={wordEntered} 
         onChange={handleFilter }
         ></input>
        <i className='fas fa-search' ></i>
       {filteredData.length !==0 && ( 
        <div>
            {
                filteredData.slice(0, 5).map((school)=>{
                    return <button  className='schooltem' >{school.properties.name}</button>
                })
            }
         </div>)}
      </div>
    )
}