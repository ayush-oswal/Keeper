import React from 'react'

function Note(props){
    console.log("in note")
    return(
           
                    <div className="note">
                        <h4>{props.title}</h4>
                        <hr /><hr />
                        <p>{props.content}</p>
                        <button onClick={()=>{
                            props.delete(props.id)
                        }} className="delete">Delete</button>
                    </div>
                
    );
}

export default Note