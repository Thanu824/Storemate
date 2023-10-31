import React from 'react';
import Selection from './Selection'
import './Main.css'
import Picture from './Picture'

//import { BsFillBrightnessHighFill } from "react-icons/bs";
function Menu(){
    
    return(
        <div className="container">
        <div className ="leftbox">
            <div className="left">
            <Selection/>
                <Selection/>
                
            </div>
            <div className="left">
            <Selection/>
            <Selection/>
            <Selection/>
            </div>
        </div> 
            
        <div className="rightb">
        
            <Selection/>
            <Selection/>
            <Selection/>
            </div>  
        <div className="righ">
            <Picture/>
        
        </div>
            

                
            

        </div>




        
        )

}

export default Menu;