const {postGame}= require('../controller/VideoGameController')
const express= require('express');
const router= express.Router();


router.post('/', postGame);

module.exports= router;
