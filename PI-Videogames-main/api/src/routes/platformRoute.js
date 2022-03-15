const express= require('express');
const router= express.Router();
const{platformController}= require('../controller/VideoGameController')

router.get('/', async(req,res)=>{
    try{

       let platformsCont = await platformController();
       res.status(200).send(platformsCont)

    }catch(error){
        console.log(error)
    }
})


module.exports= router;