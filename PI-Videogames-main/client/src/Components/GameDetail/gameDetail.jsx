import {React, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import{useDispatch, useSelector} from 'react-redux';
import { getDetail } from '../../reducer/action';
import { DetailCont,Mup,xButton } from '../../Styles/Detail/detail';



export default function GameDetail(props){
const{id} =useParams();
console.log(id);
console.log(props);

const dispatch= useDispatch();
const detail= useSelector((state)=> state.detail);

useEffect(()=>{
    dispatch(getDetail(id))
},[dispatch,id])


    return(
        <DetailCont>
            <Mup>
            <h2>Name: {detail.name}</h2>
            <Link to='/videogames'>
            <button>BACK</button>
            </Link>
            <h3>ID: {detail.id}</h3>
            <div className='imgcont'>
            <img src={detail.image} alt=''/>
            </div>
            <p>Genres: {detail.genres + ''}</p>
            <p>Description: {detail.description}</p>
            <p>Released: {detail.released}</p>
            <p>Rating: {detail.rating}</p>
            <p>Platforms: {detail.platforms + ''}</p>
            
            </Mup>
        </DetailCont>
    )
}