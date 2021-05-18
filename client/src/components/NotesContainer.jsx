import "../styles.css"
import React, { useState,useEffect } from "react"
import InputNote from "../InputNote"
import Note from "../Note"
import axios from "axios"
import {
    useParams
  } from "react-router-dom";

export default function NotesContainer() {
    let { topic } = useParams();
    const url = "/api/topic/"+topic+"/notes";
    const [notes,setNotes] = useState([{}]);


    async function getNotes() {
        
        axios.get(url)
            .then(res=>{
                console.log(res.data.notes);
                setNotes(res.data.notes)
            })
            .catch(err=>console.log(err));
    }

    useEffect(()=>{
        console.log("useEffect");
        getNotes();
      },[])

    return (
        <div>
            <InputNote 
            topicName={topic}
            updateNotes={getNotes}
            />
            <div>
                {topic}
            </div>
            {notes.map((note,index)=>
                <Note 
                key={index} 
                title={note.title}
                content={note.content}
                updateNotes={getNotes}
                />)
            }
        </div>
    )
}