
import React, { useState } from 'react'

export default function About(){

      const [myStyle, setmyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
      })
       const [btnText, setBtnText]= useState("Enable Light Mode")       
  
     const toggleStyle = ()=>{
        if(myStyle.color === 'white')
        {
          setmyStyle({
            color: 'black',
            backgroundColor: 'white'
          })
          setBtnText("Enable Dark Mode");
        }
      
          else{
            setmyStyle({
              color: 'white',
              backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode");
        }
      }
      return(
        <div className= "container" style={myStyle}>
        <div className="accordion" style={myStyle} id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About this Project
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>TextUtils.</strong>. A custom build s/w using react.
          </div>
        </div>
      </div>
      </div>
      <div className= "container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div>
    </div>
  )
}