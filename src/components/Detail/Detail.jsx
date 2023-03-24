import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
export default function Detail(){
    const [Character,setCharacter]=useState({})
    const {id}=useParams();
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
    <div>
        <h1>Soy el detail</h1>
        <div>{Character.name}</div>
        <div>{Character.status}</div>
        <div>{Character.species}</div>
        <div>{Character.gender}</div>
        <div>{Character.origin?.name}</div>
        <img width="300px" src={Character.image} alt='' />
    </div>
    )
}