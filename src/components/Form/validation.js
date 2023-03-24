const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass=/^(?=.*\d).+$/

export default function validacion({email,password}){
let error={}
if(!regexEmail.test(email)){
 error.email="Se requiere un correo"
}
if(!email){
    error.email="El correo no debe de estar vació"
}
if(email.length>35){
    error.email="El correo no debe llevar más d 35 caracteres"
}
if(password.length<6){
    error.password="La contraseña debe de tener entre 6 y 10 caracteres"
}
if(password.length>10){
    error.password="La contraseña debe de tener entre 6 y 10 caracteres"
}
if(!regexPass.test(password)){
        error.password="La contraseña debe de tener al menos un numero"
}
return error
}