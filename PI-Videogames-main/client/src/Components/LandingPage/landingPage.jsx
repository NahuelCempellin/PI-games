import React from 'react';
import {Link} from 'react-router-dom';
import { Tittle, Button2 } from '../../Styles/LandingPage/landing';
import { Cont } from '../../Styles/LandingPage/positionLanding';
export default function LandingPage(){
    return(
        <Cont>
            <div>
            <Tittle>GAMING ZONE</Tittle>
            </div>
            <Button2 className='container'>
             <div className="pixel">
            <Link to= '/videogames'>
            <p>START</p>
            </Link>
             </div>
             </Button2>

        </Cont>
    )
}