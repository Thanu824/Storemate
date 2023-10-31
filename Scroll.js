import React from 'react'
import '../Components/Scroll.css'
import profile from '../images/image1.jpg'

function Post() {
  return (
    <div className='post'>
        <img className='image' src={profile}/>
        <div className="f1"> 12451</div>
        <div className="f2">12</div>
        <div className="f3">Rs.110.00000|8756345389303835708</div>
    </div>
  )
}

export default Post