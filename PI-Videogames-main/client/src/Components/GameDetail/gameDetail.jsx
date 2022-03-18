import {React, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import{useDispatch, useSelector} from 'react-redux';
import { getDetail } from '../../reducer/action';
import { DetailCont,Mup } from '../../Styles/Detail/detail';
import LoadingPage from '../Loading/loadPage';



export default function GameDetail(){
const{id} =useParams();
const [loading,setLoading]= useState(true);

const dispatch= useDispatch();
const detail= useSelector((state)=> state.detail);


useEffect(()=>{
    dispatch(getDetail(id))
},[dispatch,id])


    return(
        <div>
            {
                loading === true? (<LoadingPage setLoading={setLoading}/>):
            
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
            <p>Genres: {detail.createdInDb?detail.genres.map(el=>el.name).join(', '): detail.genres + ''}</p>
            <p>Description: {detail.description}</p>
            <p>Released: {detail.released}</p>
            <p>Rating: {detail.rating}</p>
            <p>Platforms: {detail.platforms + ''}</p>
            
            </Mup>

        </DetailCont>}
        </div>
    )
}