/*import React from 'react'
import '../Components/Bottomboxstyle.css'

function Bottombox() {
  return (
    <div className='bottombox'>
        price
        <br/>
        werw        
    </div>
  )
}

export default Bottombox*/

import React from 'react'
import '../Components/Bottomboxstyle.css'

function Bottombox(props) {
  return (
    //just do a display format not like a button
    <div className='bottombox'>
        {props.data}
        <br/>
        {props.price}      
    </div>
  )
}

export default Bottombox