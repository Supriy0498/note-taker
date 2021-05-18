import "./styles.css"
import React, { useState } from "react"



export default function Time(props){

    const [time,setTime] = useState((new Date()).toLocaleTimeString())
    const [theme,setTheme] = useState(false)

    function displayTime(params) {
        
        setTime((new Date()).toLocaleTimeString())

    }

    

    setInterval(displayTime,1000);
    
    return(
        <div style={{textAlign:"center"}}>
            <h1>{time}</h1>
            <button style={{color:theme?"black":"red"}}
             onMouseOver={()=>setTheme(true)} 
             onMouseOut={()=>setTheme(false)}
             onClick={displayTime}>Get Time</button>
        </div>
    )
}