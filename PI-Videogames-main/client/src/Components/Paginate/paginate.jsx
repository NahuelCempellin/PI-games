import React from "react";
import { PagButton } from "../../Styles/Paginate/paginate";
export default function Paginate({gamePerPage, allGames, pag}){
    const pageNumbers=[]

        for(let i=1; i<= Math.ceil(allGames/gamePerPage); i++){
            pageNumbers.push(i)
        }
    return (
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number=>
                   <PagButton onClick={()=>pag(number)}>{number}</PagButton>
                   )}
            </ul>
        </nav>
    )
}