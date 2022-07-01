import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count} times`;
  });
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
