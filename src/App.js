import React, { useState, useEffect } from "react";
import uuid from "uuid";
import moment from "moment";
import "./styles.css";

//github rick test
//notes app
//functionality:
//-create note,
//-remove note,
//-update note

//note structure
// object
//properties:
// -id - uuid
// -note - user
// -author -user
// -createdAt - Date.now()

//useEffect eplenation

//componentDidMount() and componentDidUpdate()
//useEffect(() => {
//  console.log('asdsa)
//})

//componentDidMount()
//useEffect(() => {
//  console.log('asdsa)
//},[])

//componentDidUpdate()
//useEffect(() => {
// console.log('asdsa)
//},[Your state])

//componentDidUpdate()
//useEffect(() => {
// return () => {
// conosle.log('You deleted the note')
//}
//},[])

const SingleNote = props => {
  return (
    <div>
      <p>{props.note.noteText}</p>
      <p>{props.note.author}</p>
      <p>{props.note.createdAt.format("MMM Do, YYYY")}</p>
      <p>------------</p>
    </div>
  );
};

const NoteForm = props => {
  const [title, setTitle] = useState("foo");
  const [author, setAuthor] = useState("Dustin");
  const [noteText, setNoteText] = useState("text here");

  const onChangeTitle = e => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeAuthor = e => {
    const author = e.target.value;
    setAuthor(author);
  };

  const onChangeNoteText = e => {
    const noteText = e.target.value;
    setNoteText(noteText);
  };
  const submitForm = e => {
    e.preventDefault();
    props.setNotes([
      ...props.notes,
      {
        id: uuid(),
        noteText,
        title,
        author,
        createdAt: moment()
      }
    ]);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          value={title}
          onChange={onChangeTitle}
          placeholder="Title"
          required
        />
        <input
          value={author}
          onChange={onChangeAuthor}
          placeholder="Author"
          required
        />
        <input
          value={noteText}
          onChange={onChangeNoteText}
          placeholder="Note"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  //useState is a function from which we are receving an array with two items

  const [notes, setNotes] = useState([]);

  // useEffect(() => console.log(notes));

  return (
    <div className="App">
      <h1>Our Notes</h1>
      <NoteForm setNotes={setNotes} notes={notes} />
      {notes.map(note => (
        <SingleNote note={note} key={note.id} />
      ))}
    </div>
  );
};

export default App;
