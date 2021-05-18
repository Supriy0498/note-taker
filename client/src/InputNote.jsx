import "./styles.css"
import React, { useState } from "react"
import axios from "axios"

export default function InputNote(props){

    const url = "/api/topic/"+props.topicName+"/notes";

    const [note,setNote] = useState({
        title:"",
        content:""
    })

    async function addNote() {
        axios.post(url,
            {topicName:props.topicName,title:note.title,content:note.content},)
            .then(response=>{
                console.log(response);
                clearNote();
                props.updateNotes();
            })
            .catch(err=>console.log(err));
    }
    
    function clearNote(){
        setNote({
        title:"",
        content:""
    })}

    function handleChange(event) {
        
        const name = event.target.name
    
        setNote((prevValue)=>{
            return {
                ...prevValue,
                [name]: event.target.value
            }
        })
    }

    function handleSubmit(e) {
        console.log(note);
        e.preventDefault()
        addNote();
    }

    return(
        <div>
            <form action="#" className={props.theme?"input-note input-note-dark":"input-note input-note-light"}
            onSubmit={handleSubmit}>
                <input className={props.theme?"input-dark":null} onChange={handleChange} type="text" placeholder="Title" name="title" value={note.title}/>
                <textarea className={props.theme?"input-dark":null} onChange={handleChange} type="text" rows="4" placeholder="Take a note..." name="content" value={note.content}/>
                <button className="button-add">Add</button>
            </form>
        </div>
    )
}