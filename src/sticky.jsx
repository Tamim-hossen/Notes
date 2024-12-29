import {useState } from 'react'
import './sticky.css'

function Sticky() {
    const [notes, setNotes] = useState([]); 
    const[editabele,seteditable] = useState(false);
    function addNote() {
        const newNote = { name: "Name", text: "Text", editab:false }; 
        setNotes([...notes, newNote]);
    }
    function handleEdit(index){
        setNotes(
            notes.map((note,i) =>
                i===index ?{...note, editab: !note.editab} : note
        )
        )
        
    }

    function del(index){
        setNotes(notes.filter((_,i) => i!= index));
    }
    function handleNameChange(index,value){
        setNotes(
            notes.map((note,i) =>
                i===index? {...note, name:value} :note
            )
        )
    }
    function handleText(index, value){
        setNotes(
            notes.map((note,i) =>
           i===index? {...note, text:value}:note
        )
        )
    }
    return (
        <>
            <div className="container">
                <h1>Notes</h1>
                <button className='addbtn' onClick={addNote}>Add</button><br/>
                <div>
                    {notes.map((note, index) => (
                        <div className="display" key={index}>
                            
                            <div className='li'> 
                                <div className='look'>
                                {note.editab ? <textarea className='fixed-height' value={note.name} onChange={(e) => handleNameChange(index, e.target.value)}> </textarea>: <p1>{note.name}</p1> }
                                <br/>{note.editab?<textarea className='fixed-height2' value={note.text} onChange={(e) => handleText(index,e.target.value)}> </textarea> : <p>{note.text}</p> }
                                </div>
                                <div className='buttons'>
                                <button onClick={()=> handleEdit(index)} className='edit'>{note.editab? "Save":"Edit" }</button>
                                <button onClick={()=> del(index)} className='delete'>delete</button>
                                </div>
                                
                            </div>
                             
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sticky;

