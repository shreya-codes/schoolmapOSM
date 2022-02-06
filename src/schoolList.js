 import React from "react";
 export default function schoolList({schools}){
     return(
         <div>School schoolList\
             {schools.map((value,key)=>{
                 return <h3>{value}</h3>
             })}
         </div>
     )
 }