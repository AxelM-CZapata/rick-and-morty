import Card from './Card';
import "../App.css"
export default function Cards({characters, onClose}) {
   return(
      <div className='Cont-card'>
     {characters.map(({id,name,status,species,gender,origin,image})=>
        <Card key={id}
        id={id}
      name={name}
      status={status}
      species={species}
      gender={gender}
      origin={origin.name}
      image={image}
      onClose={onClose}
      />       
     )}
   </div>
   ) 
}
