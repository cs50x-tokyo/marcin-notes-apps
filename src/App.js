import React, { useState, useEffect } from "react";
import uuid from "uuid";
import moment from "moment";
import "./styles.css";

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

const demoState = {
  id: "12312dasfdsaf",
  note: "Note",
  author: "Someone",
  createdAt: moment()
};

const SingleNote = props => {
  // useEffect(() => {
  //   props.setNote(demoState)
  // },[])

  return (
    <div>
      <p>{demoState.note}</p>
      <p>{demoState.author}</p>
      <p>{demoState.createdAt.format("MMM Do, YYYY")}</p>
    </div>
  );
};

const NoteForm = () => {
  const [title, setTitle] = useState("foo");
  const [author, setAuthor] = useState("");
  console.log(title);
  const onChangeTitle = e => {
    const title = e.target.value;
    setTitle(title);
  };

  const onChangeAuthor = e => {
    const author = e.target.value;
    setAuthor(author);
  };

  //const onChangeAuthor

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};

const App = () => {
  //useState is a function from which we are receving an array with two items

  const demoState = {
    id: "12312dasfdsaf",
    note: "Note",
    author: "Someone",
    createdAt: moment()
  };

  const [notes, setNote] = useState([]);

  const createNewNote = () => {
    setNote([
      ...notes,
      {
        id: uuid(),
        note: "Note",
        title: "Title",
        author: "Someone",
        createdAt: moment().format("MMM Do, YYYY")
      }
    ]);
  };

  return (
    <div className="App">
      <h1>Our Notes</h1>
      <SingleNote setNote={setNote} />
      <NoteForm />
    </div>
  );
};

export default App;
