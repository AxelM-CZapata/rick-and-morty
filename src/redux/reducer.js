import {ADD_FAV,REMOVE_FAV} from "./actions"

const initialState={
    favorites:[],
    allCharacters:[]
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                favorites:[...state.favorites,action.payload],
                allCharacters: [...state.allCharacters,action.payload]
            }
        case REMOVE_FAV:{
            return{
                favorites:state.favorites.filter(char=>{
                   return char.id!==action.payload})
            }
        }
        case "FILTER":
            const filtro=state.allCharacters.filter(char=>char.gender===action.payload)
            return{
                ...state,
                favorites: state.allCharacters.filter(char=>char.gender===action.payload)

            }
            case "ORDER":
                return{
                    ...state,
                    favorites: action.payload==="A"? state.allCharacters.sort((a,b)=>a.id-b.id): state.allCharacters.sort((a,b)=>b.id-a.id)}

        default: return state;
    }
}
export default rootReducer;