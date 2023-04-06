import "./search.css"
import React from "react";
// import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id,setId]=React.useState("");
   const handleChange=(event)=>{
      setId(event.target.value)
   }
   return (
      <div className="cont-search">
         <div className="sub-cont-search">
            <input onChange={handleChange} value={id} className="input-search" type='search'/>
         <button className="buton-agregar" onClick={()=>onSearch(id)}>
            Agregar
         </button>
         </div>
      </div>
   );
}
