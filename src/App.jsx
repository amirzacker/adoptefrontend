import Counter from "./components/Counter";
import Header from "./components/Header";
import UserList from "./pages/UserList";

function App() {
  return (
    <div>
      <Header />
      <div className="p-3">
        Home
        <UserList />
        <Counter />
      </div>
    </div>
  );
}

export default App;
