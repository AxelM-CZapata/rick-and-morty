let http = require ("http");
const fs=require("fs")
const getCharById= require("./Controllers/getCharById")
// const dataFile=require ("./Utils/data")
const PORT=3001;
const server= http 
                .createServer((req,res)=>{
                    // console.log(req.url);
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    if(req.url.includes('/rickandmorty/character')){
                        let id=Number(req.url.split("/").pop())
                        getCharById(res,id)
                        // let filter= dataFile.filter(character=> character.id===id)
                        // console.log(filter)
                        // res
                        // .writeHead(200,{"Content-type":"application/json"})
                        // .end(JSON.stringify(filter))
                    }
                }).listen(PORT,"localhost")