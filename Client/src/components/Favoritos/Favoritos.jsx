import { connect } from "react-redux"
import Card from "../Card"
import { filterCards, orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"



export function Favoritos({favorites}){
    const dispatch=useDispatch()
    const [aux,setAux]=useState(false)
    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setAux(true)
        }
        function handleFilter(event){
            dispatch(filterCards(event.target.value))
            }
    return(
        <>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option  value="D">Desendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknow">unknow</option>
        </select>
        {favorites.map(({id,name,status,species,gender,origin,image})=>
        <Card key={id}
        id={id}
      name={name}
      status={status}
      species={species}
      gender={gender}
      origin={origin}
      image={image}
      />       
     )}
        </>
    )
}

function mapStateProps(state){
return{
    favorites:state.favorites
}
}

export default connect(mapStateProps)(Favoritos)