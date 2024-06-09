import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Fab from '@mui/material/Fab';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function Note (props) {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState({
    id: props.id,
    title: props.title,
    content: props.content
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function handleEdit() {
    props.onEdit(props.id, note);
    setIsEditing(false);
  }

  return (
    <div className="note">
      {isEditing ? (
        <form className="update-note">
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
          <Fab color="primary" onClick={handleEdit}><DoneIcon /></Fab>
          <Fab color="primary" onClick={() => setIsEditing(false)}><CloseIcon /></Fab>
        </form>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <Fab color="primary" onClick={() => props.onDelete(props.id)}><DeleteIcon /></Fab>
          <Fab color="primary" onClick={() => setIsEditing(true)}><EditNoteIcon /></Fab>
          
        </div>
      )}
    </div>
  );
}

export default Note;
