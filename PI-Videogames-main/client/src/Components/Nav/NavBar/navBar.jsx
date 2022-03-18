import React from "react";
import SelectorByAplh from '../Selector/selectorByAlph';
import SelectorGenre from '../Selector/selectorGenre';
import SelectFromPlatform from '../Selector/selectorPlatform';
import SelectorCreated from "../Selector/selectorCreated";
import SearchBar from "../SearchNav/searchBar";
import SelectRat from "../Selector/SelectRating";
import { NavContainer } from "../../../Styles/NavBar/containerNav";
import { Link } from "react-router-dom";
import { ButtonNav } from "../../../Styles/NavBar/create";
export default function NavBar({setOrder}){
    return(
        <div>
            <NavContainer>
            <Link to= '/newgame'>
            <ButtonNav>NEW GAME</ButtonNav>
            </Link>
            <SearchBar/>
            <SelectorByAplh setOrder={setOrder}/>
            <SelectorCreated setOrder={setOrder}/>
            <SelectRat setOrder={setOrder}/>
            <SelectorGenre/>
            <SelectFromPlatform/>
            </NavContainer>
        </div>
    )
}