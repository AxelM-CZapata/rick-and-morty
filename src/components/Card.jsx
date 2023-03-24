import "./cartas.css"
import { Link } from "react-router-dom";
export default function Card({name,status,species,gender,origin,image,onClose,id}) {
   return (
      <div className="Card">
         <div className="sub-card">
            <div className="top-card">
             <button className="close" onClick={()=>onClose(id)}>X</button>
            </div>
            <div className="title-card">
               <Link to={`/detail/${id}`}>
               <span>{name} </span>
               </Link>
            </div>
            <img className="img" src={image} alt='' />
            <h2 className="element-card specie">{species}</h2>
            <div className="element-card">
               <h2>{status}</h2>      
               <h2>{origin}</h2>
               <h2>{gender}</h2>
            </div>
         </div>
         
         
      </div>
   );
}
