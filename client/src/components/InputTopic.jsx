import "../styles.css"
import React, { useState } from "react"
import axios from "axios";

export default function InputTopic(props) {

    const [topicName,setTopicName] = useState("");
    const url = "/api/topics"

    async function addTopic() {
        axios.post(url,
            {topic:topicName},
            )
            .then(response=>{
                console.log(response);
                props.updateTopics();
            })
            .catch(err=>console.log(err));
    }

    function handleChange(event) {

        const topic = event.target.value;
        setTopicName(topic);
    }

    

    return (
        <div>
            <form action="#" className="input-topic"//{props.theme?"input-note input-note-dark":"input-note input-note-light"}
                onSubmit={(event)=>{
                    addTopic();
                    event.preventDefault()
                }}
                >
                {/* <input className={props.theme?"input-dark":null} onChange={handleClick} type="text" placeholder="Title" name="title" value={note.title}/>
                <textarea className={props.theme?"input-dark":null} onChange={handleClick} type="text" rows="4" placeholder="Take a note..." name="content" value={note.content}/> */}
                <input type="text" placeholder="Create new topic" onChange={handleChange} name="topicName" value={topicName}/>
                <button className="button-create">Create</button>
            </form>
        </div>
    )
}