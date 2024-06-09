import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import Note from './Components/Note.jsx';
import Footer from './Components/Footer.jsx';
import InputArea from './Components/InputArea.jsx';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function editNoteContent(id, editedNote) {
    setNotes(prevNotes =>
      prevNotes.map(note => (note.id === id ? editedNote : note))
    );
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          onEdit={editNoteContent}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;


