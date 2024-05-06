import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";

function App() {
  const [state, setStates] = useState([]);

  const [update, setUpdate] = useState();

  function loadData() {
    setTimeout(() => {
      fetch("http://localhost:7070/notes")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setStates(data);
        });
    }, 100);
  }

  useEffect(loadData, []); // componentDidMount

  const handleChange = (event) => {
    console.log(event);
    setUpdate({ content: event.target.value });
    console.log("value:", update);
  };
  function saveData() {
    let data = JSON.stringify(update);
    console.log(data);
    fetch("http://localhost:7070/notes", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((res) => console.log(res));
    loadData();
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(state, event, update);
    console.log(state);

    saveData();
  };

  const deleteNote = (id) => {
    console.log(id);
    fetch("http://localhost:7070/notes/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((res) => console.log(res));
    loadData();
  };
  useEffect(deleteNote, []);
  console.log(state);

  return (
    <div className="header">
      <div className="note">
        <Notes
          className="text"
          notes={state}
          onClick={(id) => deleteNote(id)}
        />
      </div>
      <div className="add-note">
        <AddNote onSubmit={onSubmit} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
