import Cards from '../Cards';

export default function Home({characters,setCharacters}){
     const onClose=(id)=>{
        setCharacters(characters.filter((element)=>element.id!==Number(id)
        ))
     }
     
    return(
        <>
        <Cards characters={characters} onClose={onClose}/> 
        </>
    )
}