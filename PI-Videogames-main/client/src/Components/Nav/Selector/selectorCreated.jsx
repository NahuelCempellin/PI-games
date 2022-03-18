import React from 'react';
import {useDispatch} from 'react-redux';
import { filterByCreate } from '../../../reducer/action';
import { Selector } from '../../../Styles/NavBar/Selector';


export default function SelectorCreated({setOrder}){
    const dispatch= useDispatch();

     function handleOrder(e){
         dispatch(filterByCreate(e.target.value))
         setOrder(`Ordered ${e.target.value}`)
     }


    return(
        <div>
            <Selector onClick={(e)=>handleOrder(e)}>
                <option hidden>Created Or Not</option>
                <option value='created'>Created</option>
                <option value='notcreated'>NotCreated</option>
            </Selector>
        </div>
    )
}