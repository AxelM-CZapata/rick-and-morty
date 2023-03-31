import './App.css';
import Nav from './components/Nav/Nav.jsx';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Routes,Route,useLocation,useNavigate} from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favoritos from './components/Favoritos/Favoritos';
function App() {
   const onSearch=(id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name){
              setCharacters((oldChars) =>[...oldChars, data]
              );
         }
         else{
            window.alert('¡No hay personajes con este ID!');
         }
      })
      .catch(()=>{window.alert('¡No hay personajes con este ID!'); 
      }
      )
   }
   const [characters, setCharacters]=useState([])
   const Error=()=> <h1>Error 404</h1>
   const navigate = useNavigate();
  const location=useLocation();
  const [acces,setAcces]=useState(false);
  const Email=""
  const pass="";
//axel@mail.com";
//"Axel99"
  const login=({email,password})=>{
   if (password === pass && email === Email) {
      setAcces(true);
      navigate('/home');
   }
  }
  useEffect(() => {
   !acces && navigate('/');
}, [acces]);
  
      if(location.pathname==='/'){
         return (
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
         </Routes>
         )
        }else{
         return(
         <div className='App'>
         <Nav onSearch={onSearch} Characters={characters}></Nav>
         <Routes>
         <Route path="/home" element={<Home characters={characters} setCharacters={setCharacters}/>}/>            
         <Route path="/about" element={<About/>}></Route>
         <Route path={"/detail/:id"} element={<Detail/>}/>
         <Route path="/favorites" element={<Favoritos/>}/>
         <Route path="*" element={<Error></Error>}/>
         </Routes>
         </div>
         ) 
        }
}

export default App;
