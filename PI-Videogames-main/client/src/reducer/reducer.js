import { FILTER_BY_GENRE,
GET_GAMES,
GET_DETAIL,
POST_GAME,
FILTER_BY_ALPH, 
FILTER_BY_PLATFORM,
FILTER_BY_SEARCH,
FILTER_BY_CREATED,
GET_GENRES,
FILTER,
GET_PLATFORMS} from "../Components/Constants/constants";


const initialState={
    games:[],
    allGames:[],
    genre:[],
    allGenres:[],
    detail:[],
    platforms:[]
}

const reducer=(state= initialState, action)=>{
    switch(action.type){
        case GET_GAMES:
            return{
                ...state,
                games: action.payload,
                allGames:action.payload
            }
            case GET_PLATFORMS:
                return{
                    ...state,
                    platforms: action.payload
                }
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload,
                
            }

        case GET_GENRES:
            
            return{
                ...state,
                genre: action.payload,
                allGenres: action.payload
            }
        case FILTER_BY_ALPH:
            
            const sortAlph =
            action.payload === "A-Z"
          ? state.allGames.sort((a, b) => a.name.localeCompare(b.name))
          : state.allGames.sort((a, b) => b.name.localeCompare(a.name));
            return{
                ...state,
                games: sortAlph 
            }
        case FILTER_BY_GENRE:
            
            return{
                ...state,
                games: action.payload ==='All'? state.allGames:
                state.allGames.filter(el=> el.genres.includes(action.payload))

            }
        case FILTER_BY_PLATFORM:
        return{
            ...state,
            games: action.payload ==='All'? state.allGames:
            state.allGames.filter(el=> el.platforms.includes(action.payload))
        }
        case FILTER_BY_SEARCH:
            return{
                ...state,
                games:action.payload
            }
        case FILTER_BY_CREATED:
            const filt= state.allGames.filter((el)=> el.createdInDb)
            const Notfilt= state.allGames.filter((el)=> !el.createdInDb) 

            return{
                ...state,
                games:  action.payload === 'created'? filt:
                Notfilt
            }    

            case FILTER:
                const asc= action.payload=== 'Asc'?state.allGames.sort((a,b)=> b.rating - a.rating):
                state.allGames.sort((a,b)=>  a.rating - b.rating)
                

             return{
                 ...state,
                 games: asc

            }

        case POST_GAME:
            return{
                ...state
            }
        default:
            return{
                ...state,
            };
    }
}

export default reducer;