import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import Roles from "./pages/Roles";
import Register from "./pages/Register2";

function App() {
  const [user, setUser] = useState('')
  return (
    <div>
      <Header user={user} />
      <div className="p-3">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
