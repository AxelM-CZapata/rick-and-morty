import style from "./form.module.css"
import { useState } from "react"
import validacion from "./validation"


export default function Form({login}){
    const [userData,setData]=useState({
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({})

    function handleChange(event){
        setData({
            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors(validacion(
            {
            ...userData,
            [event.target.name]:event.target.value
        }
        ))
    }

    function handleSubmit(event){
        event.preventDefault();
        login(userData)
    }
    return(
        <form className={style.contform}>
            <div className={style.containerForm}>
                <div className={style.containerInput}>
                    <label>Email</label>
                    <input onChange={handleChange} value={userData.email} name="email"></input>
                    <p>{errors.email}</p>
                </div>
                <div className={style.containerInput}>
                    <label>Password</label>
                    <input value={userData.password} onChange={handleChange} name="password"></input>
                    <p>{errors.password}</p>
                </div>
                <div className={style.containerInput}>
                <button onClick={handleSubmit}>Iniciar sesión</button>
                </div>  
            </div>
            
            
        </form>
    )
}