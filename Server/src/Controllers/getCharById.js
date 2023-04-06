const axios= require ("axios")
function getCharById(res,id){
axios.get('https://rickandmortyapi.com/api/character/'+id)
.then(({data})=>{
    const char={
        id:id,
        name:data.name,
        gender:data.gender,
        species:data.species,
        origin:data.origin,
        image:data.image,
        status:data.status
    }
    res
    .writeHead(200,{"Content-type":"application/json"})
    .end(JSON.stringify(char))
})
.catch(error=>{
    res
    .writeHead(500,{"Content-type":"text/plain"})
    .end(error)
})
}

module.exports=
    getCharById;
