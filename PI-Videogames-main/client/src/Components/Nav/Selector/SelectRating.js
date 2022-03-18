import React from "react";
import { useDispatch } from "react-redux";
import { filt } from "../../../reducer/action";
import { Selector } from "../../../Styles/NavBar/Selector";

export default function SelectRat({setOrder}){
const dispatch= useDispatch();

function handleSelect(e){
    e.preventDefault()
    dispatch(filt(e.target.value))
    setOrder(`Ordered ${e.target.value}`)
    
}



return(
    <div>
        <Selector onClick={(e)=> handleSelect(e)}>
            <option value='Asc'>Asc</option>
            <option value='Desc'>Desc</option>
        </Selector>
    </div>
)

}