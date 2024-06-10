import { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import moment from "moment-timezone";
import AddNote from "./components/AddNote";
import Notes from "./components/Notes";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copyright from "./components/Copyright";

function App() {
  const [state, setStates] = useState([]);

  const [update, setUpdate] = useState();

  function loadData() {
    setTimeout(() => {
      fetch("https://crudback-g12g.onrender.com/notes")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setStates(data);
        });
    }, 2000);
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
    fetch("https://crudback-g12g.onrender.com/notes", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((res) => console.log(res));
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(state, event, update);
    console.log(state);

    saveData();
  };

  const deleteNote = (id) => {
    console.log(id);
    fetch("https://crudback-g12g.onrender.com/notes/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.data)
      .then((res) => console.log(res));
  };
  useEffect(deleteNote, []);
  console.log(state);

  //******************************************** */

  const clock = moment().format("LTS").toString(); //new Date().toLocaleTimeString();
  console.log(clock);
  const [time, setTime] = useState(Date.now());
  console.log(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
      loadData();
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [state]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Задача CRUD
        </Typography>
        <Typography variant="body1" gutterBottom>
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
</Typography>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
