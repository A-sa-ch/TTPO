import React, { useState } from 'react'
import arrowToggle from "../static/img/arrowToggle.svg"
import circle from "../static/img/circle.svg"

import "../static/styles/Catalog.css"

function Filter({name}) {

    const [toggle, setToggle] = useState(false)
    
    const style = toggle ? "rotated" : ""

    return (
        <div>
        <div className="filter_wrapper">
            <p>{name}</p>
            <img src={arrowToggle} onClick={()=>setToggle(!toggle)}className={style}/>
          
        </div>
        {toggle &&
            <div className="circles">
                <img src={circle} alt="circle"/>
                <img src={circle} alt="circle"/>
                <img src={circle} alt="circle"/>
                <img src={circle} alt="circle"/>
                <img src={circle} alt="circle"/>
                <img src={circle} alt="circle"/>
                <img src={circle} alt="circle"/>
                <img src={circle} alt="circle"/>
            </div>
            }
        </div>
    )
}

export default Filter
