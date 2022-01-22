import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="login">Login</Link> | <Link to="register">Register</Link>
        </nav>
      </header>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
