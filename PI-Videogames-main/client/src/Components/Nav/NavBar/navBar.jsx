import React from "react";
import SelectorByAplh from '../Selector/selectorByAlph';
import SelectorGenre from '../Selector/selectorGenre';
import SelectFromPlatform from '../Selector/selectorPlatform';
import SearchBar from "../SearchNav/searchBar";
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
            <SelectorGenre/>
            <SelectFromPlatform/>
            </NavContainer>
        </div>
    )
}