import {React, useEffect, useState} from "react";
import{useDispatch,useSelector} from 'react-redux';
import GameCard from "../GameCard/gameCard";
import { getAllGames } from "../../reducer/action";
import Paginate from "../Paginate/paginate";
import { GridCards } from "../../Styles/Cards/GridCards";
import NavBar from '../Nav/NavBar/navBar'
import { NotFound } from "../../Styles/Cards/Cards";
import { WAITING } from "../Constants/constants";
import { ContNot, SonicW } from "../../Styles/Cards/Cards";
import { PagButton } from "../../Styles/Paginate/paginate";

export default function Home(){
    const dispatch= useDispatch();
    const allGames=useSelector((state)=> state.games);
    const[currentPage, setCurrentPage]= useState(1);
    const[gamePerPage]= useState(15);
    const indexOfLastGame= currentPage*gamePerPage;
    const indexOfFirstGame= indexOfLastGame - gamePerPage;
    const currentGame= allGames.slice(indexOfFirstGame,indexOfLastGame)
    // eslint-disable-next-line no-unused-vars
    const[order, setOrder]= useState('');

    const pag=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    useEffect(()=>{
        dispatch(getAllGames())
    },[])
    
    function handleSubmit(){
        dispatch(getAllGames());
    }

  

    return(
        <div>
            <div>
            <NavBar setOrder={setOrder}/>
            </div>
            <PagButton onClick={handleSubmit}>↻</PagButton>
           <Paginate
            gamePerPage={gamePerPage}
            allGames={allGames.length}
            pag={pag}/>
            <div>
                <GridCards>
                    <span>
                {allGames.length===0?(
                    <ContNot>
                <NotFound>GAME NOT FOUND..</NotFound>
                <SonicW src={WAITING} alt=''/>
                </ContNot> ): currentGame.map((game)=>{
                    return(
                        <div>
                            <GameCard
                            id={game.id}
                            name={game.name}
                            image={game.image}
                            released={game.released}
                            rating={game.rating}
                            platforms={game.platforms}
                            description={game.description}
                            genres={game.createdInDb?game.genres.map(el=>el.name).join(', '): game.genres + ''}/>
                        </div>
                    )
                })}
                </span>
                </GridCards>
            </div>
        </div>
    )
}

