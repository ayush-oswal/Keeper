//here instead of if and else to check wether title or description should be changed we could use [name] which holds the name of input which caused the event, [] helps us tap into variable 'name' instead of interpreting it as KEY 'name'

import React, { useState } from "react";
function Input(props){
    const [Note,ChangeNote] = useState({
        Title:"",
        Description:""
    })
    function UpdateNote(event){
        const {name,value} = event.target
        if(name==="Title"){
        ChangeNote((prev)=>{
            return({
                ...prev,
                Title:value
            });
        })
    }
    else{
        ChangeNote((prev)=>{
            return({
                ...prev,
                Description:value
            });
        })
    }
    }
    return(
        <div className="inputArea">
            <input onChange={UpdateNote} className="inputTitle" type="text" name="Title" id="" placeholder="Add title" value={Note.Title} />
            <input onChange={UpdateNote} className="inputContent" type="text" name="Description" id="" placeholder="Add content" value={Note.Description} />
            <button onClick={()=>{
                props.addNote(Note)
                ChangeNote({
                    Title:"",
                    Description:""
                })
            }} className="addNote">+</button>
        </div>
    );
}

export default Input