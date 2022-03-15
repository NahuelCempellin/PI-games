import {React, useState} from "react";
import {useDispatch} from 'react-redux';
import { filterBySearch, getAllGames } from "../../../reducer/action";
import { Input } from "../../../Styles/NavBar/Selector";
export default function SearchBar(){
    const dispatch= useDispatch();
    const [name, setName]= useState('');

    function handleSearchChange(arg){
        arg === ''?
        dispatch(getAllGames()):
        dispatch(filterBySearch(arg))
    }

    function handleInputChange(e){
        e.preventDefault();
        handleSearchChange(e.target.value);
        setName(e.target.value);
    }

   
    

    return(
        <div>
            <Input
            placeholder="Choose your destiny..."
            onChange={(e)=>handleInputChange(e)}/>
            
        </div>
    )
}