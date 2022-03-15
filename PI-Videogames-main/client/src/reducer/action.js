import { 
GAME_URL,
GENRES_URL,
ID_URL,
POST_URL,
PLATFORM_URL,
GET_PLATFORMS,
GET_GAMES,
GET_GENRES,
GET_DETAIL,
FILTER_BY_GENRE,
FILTER_BY_ALPH,
FILTER_BY_PLATFORM,
FILTER_BY_SEARCH,
NAME_URL} from "../Components/Constants/constants";
import axios from 'axios';

export function getAllGames(){
    return function (dispatch){
        return fetch(GAME_URL)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type: GET_GAMES,
                payload:res
            })
        })
    }
}

export function getAllGenres(){
    return function (dispatch){
        return fetch(GENRES_URL)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type: GET_GENRES,
                payload:res

            })
        })
    }
}

export function getDetail(id){
    return function(dispatch){
        return fetch(ID_URL + id)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type:GET_DETAIL,
                payload: res
            })
        })
    }
}

export function getPlatforms(){
    return function(dispatch){
        return fetch(PLATFORM_URL)
        .then(response=> response.json())
        .then(res=>{
            dispatch({
                type: GET_PLATFORMS,
                payload:res
            })
        })
    }
}

export function filterByAlph(payload){
    return{
    type: FILTER_BY_ALPH,
    payload
}}

export function filterByGenre(payload){
    return{
        type: FILTER_BY_GENRE,
        payload
    }
}

export function filterByPlatform(payload){
    return{
        type: FILTER_BY_PLATFORM,
        payload
    }
}

export function filterBySearch(name){
return function (dispatch){
    try{
        return fetch(NAME_URL + name)
        .then(response=>response.json())
        .then(res=>{
            dispatch({
                type: FILTER_BY_SEARCH,
                payload: res
            })
        })
    }catch(error){
        if(error.response){
       alert(Error.response.data)
    }
    }
}
}

export function postGame(payload){
    return async function(){
        const response= await axios.post(POST_URL, payload)
        console.log(response)
        return(response)
    }
}
