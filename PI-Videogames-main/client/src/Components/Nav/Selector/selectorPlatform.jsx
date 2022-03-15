import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByPlatform, getPlatforms } from "../../../reducer/action";
import { Selector } from "../../../Styles/NavBar/Selector";


export default function SelectFromPlatform(){
    const Platforms1= useSelector((state)=> state.platforms);
    const dispatch= useDispatch();

    
    useEffect(()=>{
        dispatch(getPlatforms())
    },[])
    
    function handleSelector(e){
        e.preventDefault();
        dispatch(filterByPlatform(e.target.value));
    }

    


    return(
        <div>
            <Selector onChange={(e)=>handleSelector(e)}>
                <option value='All'>Platforms</option>
                {
                    Platforms1.map((el=>{
                        return(
                            <option value={el} key={el.id}>{el}</option>
                        )
                    }))
                }
            </Selector>
        </div>
    )
}