import "./styles.css"
import React from "react"
import axios from "axios"

export default function Note(props){

    console.log(props.id);
    const url = "/api/topic/"+props.topicName+"/notes/"+props.id;

    function handleDelete() {        
        
        axios.delete(url)
            .then(res=>{
                console.log("deleting");
                console.log(res.data);
                props.updateNotes();
            })
            .catch(err=>console.log(err));
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