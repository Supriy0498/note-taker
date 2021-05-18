import "./styles.css"
import React from "react"

export default function Note(props){

    function handleDelete(event) {        
        
        //return props.handleDelete(props.id)

    }

    return(
        <div 
        className={props.theme?"note note-dark":"note note-light"}
        >
            <h1>{props.title}</h1>
            <p style={{marginBottom:"10px"}}>{props.content}</p>
            <button className="delete-btn" onClick={handleDelete}>DELETE</button>
        </div>
    )
}