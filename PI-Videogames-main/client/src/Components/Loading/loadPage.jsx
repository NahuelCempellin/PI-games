import React from "react";
import { WAITING } from "../Constants/constants";
import { ContNot, NotFound, SonicW } from "../../Styles/Cards/Cards";
import { Div } from "../../Styles/Detail/loading";

export default function LoadingPage({setLoading}){
    return(
        <Div>
             <div>
             <ContNot>
                <NotFound>PLEASE WAIT..</NotFound>
                <SonicW src={WAITING} alt=''/>
                </ContNot>
      <div className="setLoading">
        {setTimeout(() => {
          setLoading(false);
        }, 3000)}
      </div>
    </div>
        </Div>

    )
}