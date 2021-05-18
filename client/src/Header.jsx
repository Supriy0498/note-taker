import React from "react"
import "./styles.css"

function Header(props){

    // var style = {
    //     position:"absolute",
    //     right:20,
    // }
    
    // const [theme, setTheme] = useState(props.theme);
    // const body = document.querySelector("body");
    
    // function changeTheme(params) {
    //     if(theme){
    //       setTheme(0);
    //       body.style.background = "#eee";
    //     }
    //     else{
    //       setTheme(1);
    //       body.style.background = "#363640";
    //     }
    // }

    return(
        <header className={props.theme?"header header-dark":"header header-light"}>
            <h1 style={{display:"inline-block"}}>Note Keeper</h1>
            {/* <button style={style} onClick={changeTheme} >{props.theme?"Light":"Dark"}</button> */}
        </header>
    )
}

export default Header