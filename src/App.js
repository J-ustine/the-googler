import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import UserSpace from "./UserSpace";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="userSpace" element={<UserSpace />} />
        <Route path="login/userSpace" element={<UserSpace />} />
        <Route path="register/userSpace" element={<UserSpace />} />
      </Routes>
    </div>
  );
}

export default App;
