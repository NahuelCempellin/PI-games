const express= require('express')
const axios= require('axios');
const router= express.Router();
const {Genre}= require('../db');
const {API_KEY}= process.env; 


router.get('/', async(req,res)=>{
    try{
        let genres= await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        
      let  genre = genres.data.results;
    
        genre.map(async (el) => await Genre.findOrCreate({
                where:{
                    id: el.id,
                    name: el.name   
                }
            }))

    const dbGenre= await Genre.findAll() 
          res.status(200).send(dbGenre)  
    }catch(error){
       console.log(error)
    }
})




module.exports= router;