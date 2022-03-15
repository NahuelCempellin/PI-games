import React from "react";
import { Selector } from "../../../Styles/NavBar/Selector";
import { filterByAlph } from "../../../reducer/action";
import {useDispatch} from 'react-redux';

export default function SelectorByAplh({setOrder}){
    const dispatch= useDispatch();

    function HandleOrder(e){
        
        e.preventDefault();
        dispatch(filterByAlph(e.target.value));
        setOrder(`Ordered ${e.target.value}`);
    }


    return(
        <div>
            <Selector onClick={(e)=>HandleOrder(e)}
            defaultValue='default'>
                <option value='default' disabled>Name</option>
                <option value='A-Z'>Ascendent</option>
                <option value='Z-A'>Descendent</option>
            </Selector>
        </div>
    )
}