import React from 'react';
import Props from "./Props";
import Menuitem from "./Data";

const Picture = () =>{
    return(
        <>
        <div className="container my-5">
            <div className="row">
                {Menuitem.map((values)=>{
                    return(
                        <>
                    
                <Props
                image={values.image}
                name={values.name}
                number={values.number}
                price={values.price}
                />
                </>
                    )
                })}
                </div>
                </div>
                </>
)

}        
export default Picture;
