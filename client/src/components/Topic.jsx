import "../styles.css"
import React from "react"
import {
    Link,
    useHistory
  } from "react-router-dom";

export default function Topic(props) {

    const history = useHistory();
    
    function handleClick(params) {
        console.log("topic clicked"); 
        //props.changeContainer(props.topicName);
        history.push('/'+props.topicName+'/notes')
    }
    
    return (
        <div onClick={handleClick} className="topic">
            <h4>{props.topicName}</h4>
        </div>
    )
}