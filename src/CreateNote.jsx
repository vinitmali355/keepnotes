import React, { useState } from 'react'
// import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
// import Input from '@mui/material/Input';

const CreateNote = (props) => {
    const [exp,setExp] = useState(false);
    const [note,setNote]=useState({title:'',content:''});
    const InputEvent= (event) =>{
        const {value,name} = event.target;
        setNote((prev) => {
            return{
                ...prev,
                [name]:value
            }});
        // console.log(note);
        
    }
    const addEvent = (event) =>{
        event.preventDefault();
        props.passNote(note);
        setNote({title:'',content:''});
    }
    const expand = () =>{
        setExp(true);
    }
    const normal = () =>{
        setExp(false);
    }

  return (
    <>
        <div className='form_div' onDoubleClick={normal}>
            <form>
                <div className="note-input">
                {exp?
                    <input 
                        type="text" 
                        name='title'
                        value={note.title} 
                        onChange={InputEvent} 
                        placeholder="Title" 
                        className="note-title" 
                        autoComplete='off' 
                        /> :null}

                    <textarea 
                        name='content'
                        value={note.content} 
                        onChange={InputEvent} 
                        placeholder="Write a note..."
                        className="note-content"
                        onClick={expand}
                        
                        >
                        
                    </textarea>
                    {expand? 
                    <button className="add-button" onClick={addEvent}>
                        <AddIcon />
                    </button> :null}
                    
                </div>
            </form>
        </div>
    </>
  )
}

export default CreateNote