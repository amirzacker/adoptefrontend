import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import SimLogin from "./pages/SimLogin";
import UserList from "./pages/UserList";

function App() {
  const [user, setUser] = useState('')
  return (
    <div>
      <Header user={user} />
      <SimLogin setUser={setUser} />
      <div className="p-3">
        Home
        <UserList />
        <Counter />
      </div>
    </div>
  );
}

export default App;
