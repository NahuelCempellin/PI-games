import {React, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Selector } from "../../../Styles/NavBar/Selector";
import { filterByGenre, getAllGenres } from "../../../reducer/action";

export default function SelectorGenre(){
    const Genre= useSelector((state)=> state.genre);
    
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    },[])



    function handleOnChange(e){
        e.preventDefault();
        dispatch(filterByGenre(e.target.value));
    }

    



    return(
        <div>
            <Selector onChange={(e)=>handleOnChange(e)}>
                <option value='All'>Genre</option>
                {
                    Genre.map((el)=>{
                        return(
                            <option value={el.name}>{el.name}</option>
                        )
                    })
                }
            </Selector>
        </div>
    )
}