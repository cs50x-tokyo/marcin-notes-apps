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

//1. on pushing update button
//2. Get the note whose update button we pushed
//3. Place the note object in the state.
//4. the chosen notes data shows in the respective boxes
//5. user changes the data and pushes submit
// 6. Data is update
const App = () => {
  //useState is a function from which we are receving an array with two items
  const [title, setTitle] = useState("foo123");
  const [author, setAuthor] = useState("Dustin");
  const [noteText, setNoteText] = useState("text here");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(update);
  }, [update]);

  const deleteNote = key => {
    console.log(key);
  };

  const SingleNote = props => {
    // const [updatedTitle, setUpdatedTitle] = useState("");
    // const [updatedAuthor, setUpdatedAuthor] = useState("");
    // const [updatedNoteText, setUpdatedNoteText] = useState("");

    //note
    //setNotes
    //id

    //update
    const UpdateComponent = () => {
      const onChangeTitle = e => {
        const title = e.target.value;
        setTitle(title);
      };

      return (
        <div>
          <label>
            Title:
            <input
              value={title}
              onChange={onChangeTitle}
              placeholder="Title"
              required
            />
          </label>
        </div>
      );
    };

    const updateNote = note => {
      //render a form with values for the note
      setUpdate(true);

      console.log("Update pressed");
      console.log(note);

      //use setState to update the note.
      setTitle(note.title);
      setAuthor(note.author);
      setNoteText(note.noteText);

      // render
      // return
    };

    return (
      <div>
        <p>{props.note.noteText}</p>
        <p>{props.note.author}</p>
        <p>{props.note.createdAt.format("MMM Do, YYYY")}</p>
        <p>------------</p>
        {/* trigger update component */}
        {update ? <UpdateComponent /> : console.log(false)}
        <button onClick={() => updateNote(props.note)}>Update</button>
        <button onClick={() => deleteNote(props.note.id)}>Delete</button>
      </div>
    );
  };

  //create a new note
  const NoteForm = props => {
    // console.log(props);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [noteText, setNoteText] = useState("");

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
    //Create
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
          <label>
            Title:
            <input
              value={title}
              onChange={onChangeTitle}
              placeholder="Title"
              required
            />
          </label>

          <label>
            Author:
            <input
              value={author}
              onChange={onChangeAuthor}
              placeholder="Author"
              required
            />
          </label>
          <br />
          <label>
            Text:
            <input
              value={noteText}
              onChange={onChangeNoteText}
              placeholder="Note"
              required
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  };

  const [notes, setNotes] = useState([]);

  // useEffect(() => console.log(notes));

  return (
    <div className="App">
      <h1>Our Notes</h1>
      <NoteForm setNotes={setNotes} notes={notes} />
      {notes.map((note, index) => (
        <SingleNote note={note} setNotes={setNotes} key={note.id} />
      ))}
    </div>
  );
};

export default App;
