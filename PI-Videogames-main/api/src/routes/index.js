const  {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRoutes= require('./videogameRoute');
const genreRoute= require('./genreRoute');
const gamePost= require('./postRoute');
const platformRoute= require('./platformRoute');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames',videoGamesRoutes);
router.use('/genre',genreRoute);
router.use('/videogame', gamePost);
router.use('/platforms', platformRoute);










module.exports = router;
