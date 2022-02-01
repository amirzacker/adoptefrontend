import { useCallback, useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";

function App() {
  const [user, setUser] = useState('')
  const setUserEva = useCallback(() => setUser('Eva'), [])
  const setUserAude = useCallback(() => setUser('Aude'), [])
  return (
    <div>
      <Header user={user} />
      <button onClick={setUserEva}>Eva</button>
      <button onClick={setUserAude}>Aude</button>
      <div className="p-3">
        Home
        <UserList />
        <Counter />
      </div>
    </div>
  );
}

export default App;
