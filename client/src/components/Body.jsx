import "../styles.css"
import React, { useState } from "react"
import TopicsContainer from "./TopicsContainer"
import NotesContainer from "./NotesContainer";

export default function Body(props) {

    const [isTopicsContainer,setIsTopicsContainer] = useState(true);
    const [topic,setTopic] = useState("");
    
    function changeContainer(topicName){
        console.log("container changed");
        console.log(topicName);
        setTopic(topicName);
        setIsTopicsContainer(!isTopicsContainer);
    }

    return (
        <div>
            {isTopicsContainer?
                <TopicsContainer changeContainer={changeContainer}/>
                :
                <NotesContainer topicName={topic}/>
            }
        </div>
    )
}