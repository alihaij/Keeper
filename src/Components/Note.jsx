import React from "react";
var currentYear = new Date().getFullYear(); 
function Note(props){
    
   

    return <div className="note">
    <h1>{props.title} </h1>
     <p>{props.content}</p>
     
     </div>
}

export default Note;