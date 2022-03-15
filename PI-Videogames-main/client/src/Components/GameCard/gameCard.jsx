import React from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "../../Styles/Cards/Cards";

export default function GameCard({name,id,description,released,rating,platforms,image,genres}){
    console.log(image)
    return (
    <div>
        <CardContainer>
            <div className="head">
            <img src={image} alt=''/> 
            </div>
            <div className="underbox">
           
            <div className='genres'>
            <Link to={`/videogames/${id}`}>
            <h2>{name}</h2>
            </Link>
            <p>{genres + ''}</p>
            </div>
            </div>
        </CardContainer>
    </div>
    )
}