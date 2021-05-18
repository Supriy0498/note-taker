import "./styles.css"
import React, { useState } from "react"

export default function Register(props){

    // const [fName,setFName] = useState("");
    // const [lName,setLName] = useState("");

    const [fullName,setFullName] = useState({
        fName:"",
        lName:"",
        email:""
    })

    function changeFullName(event) {
        const name = event.target.name

        setFullName((prevValue)=>{
                return {...prevValue,
                    [name]:event.target.value}
            // if(name==="name")
            //     return {...prevValue,
            //         [fName]:event.target.value}
            //     // lName:prevValue.lName,
            //     // email:prevValue.email
            
            // else if(name==="email")
            // return {...prevValue,
            //     [fName]:event.target.value}
            //     // return {fName:prevValue.fName,
            //     //     lName:prevValue.lName,
            //     //     email:event.target.value,
            //     //     email:"oop"}
            
            //  return {...prevValue,
            //     [fName]:event.target.value}
            //{fName:prevValue.fName,
            //     lName:event.target.value,
            //     email:prevValue.email}
        });
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Hola {fullName.fName + " " + fullName.lName}</h1>
            <p>{fullName.email}</p>
            <form>
                <input type="text"
                 placeholder="Name"
                 name="fName"
                 onChange={changeFullName}
                 />
                <input type="text"
                name="lName"
                 placeholder="Surname"
                 onChange={changeFullName}
                 />
                 <input type="email"
                 placeholder="Email"
                 name="email"
                 onChange={changeFullName}
                 />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}