// big bug i was encountering was that i did not write return statement for map function

import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import Note from './note'
import Input from './Input'


function App(){
    const [Notes,UpdateNotes] = useState([])
    function AddNote(NOTE){
        UpdateNotes((prev)=>{
            return([...prev,NOTE])
        })
    }
    function DeleteNote(id){
        return(
            UpdateNotes((prev)=>{
                return(
                    prev.filter((note,index)=>{
                        return index!==id
                    })
                )
            })
        )
    }
    function RenderNotes(NOTE,index){
        // console.log(index)
        // console.log(NOTE)
        return(
            <Note delete={DeleteNote} key={index} id={index} title={NOTE.Title} content={NOTE.Description} />
        );
    }
    return(
        <div>
            <Header />
            <div className="main">
            <Input addNote={AddNote} />
                <div className="notes">
                    {Notes.map((note,index)=>{
                       return(RenderNotes(note,index)) 
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App