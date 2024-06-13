import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function InputArea(props) {
  const [note, setNote] = useState({
    id: Date.now(),
    title: "",
    content: ""
  });
  
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      id: Date.now(),
      title: "",
      content: ""
    });
  }

 
  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Note down tasks..."
        />
        <Fab color="primary" onClick={submitNote}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default InputArea;
