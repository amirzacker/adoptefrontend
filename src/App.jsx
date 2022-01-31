import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="p-3">
        Home
        <Counter />
      </div>
    </div>
  );
}

export default App;
