const axios= require('axios');
const{Videogames, Genre}= require('../db');
const {API_KEY}= process.env; 
const {Op}= require('sequelize');


const Info = async () => {
    try {
      let firstUrl = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=40`;
  
      let firstData = (await axios.get(firstUrl)).data;
      let videogame_1 = await firstData.results;
      let secondData = (await axios.get(firstData.next)).data;
      let videogame_2 = await secondData.results;
      let thirdData = (await axios.get(secondData.next)).data;
      let videogame_3 = await thirdData.results;
  
      let allVideogamesApi = [...videogame_1, ...videogame_2, ...videogame_3];
  
      let getDBInfo = await Videogames.findAll({
        include: {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] },
        },
        attributes: ['name','id', 'description', 'released','rating','platforms','image','createdInDb']
      });
      
  
      let formatedApiInfo = allVideogamesApi?.map((e) => {
        return {
          id: e.id,
          name: e.name,
          image: e.background_image ? e.background_image : e.image,
          rating: e.rating,
          genres: e.genres.map((e) => e.name),
          platforms: e.platforms.map((e) =>
            e.platform?.name ? e.platform.name : e
          ),
        };
      });

      let allVideogamesInfo = getDBInfo
        ? [...formatedApiInfo, ...getDBInfo]
        : [...formatedApiInfo];
  
      return allVideogamesInfo;
    } catch (error) {
      console.log(error);
    }
  };





const getNamesGames= async (name)=>{
  try
   { 
        
        let nameGame= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`); 
      let nameGames= nameGame.data.results;
      const DBGame= await Videogames.findAll({
          includes: Genre,
          where:{
              name:{
                  [Op.iLike]: `%${name}%`
              }
          },
          attributes: ['name','id', 'description', 'released','rating','platforms','image','createdInDb']
      })
     
      let VideoGamesNames = DBGame
      ? [...nameGames, ...DBGame]
      : [...nameGames];
      

      const mapGame= VideoGamesNames.map((el)=>{
        return {
            id: el.id,
            name: el.name,
            image: el.background_image ? el.background_image : el.image,
            rating: el.rating,
            genres: el.genres.map((e) => e.name),
            platforms: el.platforms?.map((e) =>
              e.platform?.name ? e.platform.name : e
            ),
      }})
      return mapGame;
        }catch(error){
            console.log(error)
        }
    

        
}

const getGameID = async (id) => {
    if (
      id.match(
        /^[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}$/i //expresion regular valida un UUID 
      )
    ) {
      try {
        let dbSearch = await Videogames.findAll({
          where: { id },
          include: [
            { model: Genre, attributes: ["name"], through: { attributes: [] } },
          ],
          attributes: ['name','id', 'description', 'released','rating','platforms','image','createdInDb']
        });
        return dbSearch[0];
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let info = (
          await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        ).data;
  
        let obj = {
          id: info.id,
          name: info.name,
          image: info.background_image,
          genres: info.genres.map((e) => e.name),
          description: info.description_raw,
          released: info.released,
          rating: info.rating,
          platforms: info.platforms.map((e) => e.platform.name),
        };
  
        return obj;
      } catch (error) {
        console.log(error);
      }
    }
  };

    const platformController= async()=>{
      try {
        let platformUrl = `https://api.rawg.io/api/games?key=${API_KEY}&page=1&page_size=40`;
    
        let firstData = (await axios.get(platformUrl)).data;
        let videogame_1 = await firstData.results;
        let secondData = (await axios.get(firstData.next)).data;
        let videogame_2 = await secondData.results;
        let thirdData = (await axios.get(secondData.next)).data;
        let videogame_3 = await thirdData.results;
    
        let allPlats = [...videogame_1, ...videogame_2, ...videogame_3];
        let allPlatform= allPlats.map((el=>{ 
          return(
            el.platforms.map((e)=> e.platform.name)
          )
        }))
        let plat=[];

        for(let i= 0 ; i<allPlatform.length; i++){
          for(let j=0; j<allPlatform[i].length; j++){
            if(!plat.includes(allPlatform[i][j])){
                plat.push(allPlatform[i][j])
            }else{
              continue
            }
          }
        }
        return plat;
    }catch(error){
      console.log(error)
    }
  }
  
    const postGame= async(req,res,next)=>{
      
      try
        { const{name, id, description, released, rating, platforms, image, genres}= req.body;
        const createdInDb= true;
       
        const newGame= {name, id, description, released, rating, platforms, image, createdInDb}

        const createGame= await Videogames.create(newGame)
    
        for(let i of genres){
            const gen= await Genre.findOne({
                where:{
                    name: i
                }

            })
            createGame.addGenre(gen)
            res.status(200).send(createGame.id);

        }}catch(error){
            next(error)
        }

    }


module.exports={
    Info,
    platformController,
    getNamesGames,
    getGameID,
    postGame

}