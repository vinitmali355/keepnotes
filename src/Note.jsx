import React from 'react';
import './Note.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
  const deleteNote= () =>{
    return props.deleteItem(props.id);
  }
  return (
    <>
      <div className="note">
        <h2>
          {props.title}
          <button className='btn' onClick={deleteNote}>
          <DeleteOutlineIcon className='deleteIcon' />
        </button>
        </h2>
        <br />
        <p>{props.content}</p>
      </div>
            
    </>

  );
};

export default Note;
