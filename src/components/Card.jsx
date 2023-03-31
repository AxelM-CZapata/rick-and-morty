import "./cartas.css"
import { Link } from "react-router-dom";
import { connect} from "react-redux";
import { addFav,removeFav } from "../redux/actions";
import {useState,useEffect} from "react"
export function Card({favorites,removeFav,addFav,name,status,species,gender,origin,image,onClose,id}) {
   const [isFav,setFav]=useState(false)
   
   
   function handleFavorite(){
     if(isFav){
      setFav(false);
      removeFav(id);
     }
     if(!isFav){
      setFav(true);
      addFav({name,status,species,gender,origin,image,id})
     }
   }

   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [favorites]);


   return (
      <div className="Card">
         <div className="sub-card">
            <div className="top-card">
           { isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
            (<button onClick={handleFavorite}>🤍</button>)}
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


function mapSateToProps(state){
return{
   favorites: state.favorites
}
}

export function mapDispatchToProps(dispatch) {
   return{
      removeFav:(id)=>{
         dispatch(removeFav(id))
      },
      addFav:(char)=>{
         dispatch(addFav(char))
      }
   }
}
export default connect(mapSateToProps,mapDispatchToProps)(Card)