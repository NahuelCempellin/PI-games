const{Videogames, Genre}= require('../db');
const express= require('express');
const router=express.Router();
const{Op}= require('sequelize');
const {Info,getNamesGames,getGameID}= require('../controller/VideoGameController');





router.get('/', async(req,res)=>{
    const {name}= req.query;

    if(!name){
        try{
            let videoGames= await Info();
            res.status(200).send(videoGames);

        }catch(error){
            console.log(error)
        }
    }else{
        try{

            let nameGame= await getNamesGames(name);
            nameGame? res.status(200).send(nameGame):
            res.status(204).json({msg: 'Game Not Found!!'})


        }catch(error){
            console.log(error)
        }
    }
})

router.get('/:id', async(req,res,next)=>{
  const {id}= req.params;

  try{

    let gameId= await getGameID(id);
    gameId? res.status(200).send(gameId):
    res.status(204).json({msg: 'Id not Found!!'})


  }catch(error){
      next(error)
  }
});




module.exports= router;