import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

function App() {
  const [addItem,setItem] = useState([]);
  const addNote = (note) =>{
    setItem((prevData)=>{
      return [...prevData,note];
    })
    // alert('clicked');
    console.log(note);
  }
  const onDelete = (id) =>{
    setItem((prevData)=>
      prevData.filter((val,indx)=>{
        return indx !== id;
      })
    )
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val,ind)=>{
        return <Note 
          key={ind}
          id={ind}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />
      })}
      <Footer />
    </>
  );
}

export default App;