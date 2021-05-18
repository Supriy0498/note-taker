import React, { useState } from "react"
import Body from "./components/Body";
import Header from "./Header";
import "./styles.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import NotesContainer from "./components/NotesContainer";

function App() {

  const [theme, setTheme] = useState(0);
  const [notes,setNotes] = useState([])
  const body = document.querySelector("body");
  
  function changeTheme(params) {
    if(theme){
      setTheme(0);
      body.style.background = "#eee";
    }
    else{
      setTheme(1);
      body.style.background = "#363640";
    }
  }

  function addNote(note) {
    
    setNotes((prevNotes)=>{
      return [...prevNotes,note]
    })
  }

  function deleteNote(noteIndex) {
    
    setNotes((prevNotes)=>{
      return prevNotes.filter((item,index)=>{
        return noteIndex!==index;
      })
    })
  }

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:topic/notes" component={NotesContainer} />
      </Switch>
    </Router>
    // <div>
    //   <Header theme={theme}/>
    //   <button style={{display:"block",position:"absolute",right:10,margin:20}} onClick={changeTheme}>{theme?"Light":"Dark"}</button>
    //   {/* <InputNote theme={theme} addNote={addNote}/> */}
    //   <Body/>
    //   {/* {notes.map((note,index)=>
    //     <Note id={index} key={index} deleteNote={deleteNote} theme={theme} title={note.title} content={note.content}/>
    //   )} */}
    // </div>
  );
}

export default App;
