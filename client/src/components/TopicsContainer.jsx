import "../styles.css"
import React, { useState,useEffect } from "react"
import InputTopic from "./InputTopic"
import Topic from "./Topic"
import axios from "axios"

export default function TopicsContainer(props) {
    const url = "/api/topics"

    const [topics,setTopics] = useState(['a','b']);
    console.log("start");
    async function getTopics() {
        
        axios.get(url)
            .then(res=>{
                console.log(res.data);
                setTopics(res.data)
            })
            .catch(err=>console.log(err));
    }

    function updateTopics() {
        getTopics();
    }

    useEffect(()=>{
        console.log("useEffect");
        getTopics();
      },[])

    return (
        <div>
            <InputTopic updateTopics = {updateTopics}/>
            <div>My Topics</div>
            {topics.map((topic,index)=><Topic changeContainer={props.changeContainer} key={index} topicName={topic}/>)}
        </div>
    )
}