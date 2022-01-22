import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Form from "./Form";
import NotesList from "./NotesList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Login />
      <Register />
      <Form />
      <NotesList />
    </div>
  );
}

export default App;
