import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>🚀 Haloo! </h1>
      <button onClick={handleClick}>Likes ({count})</button>
    </>
  );
}

export default App;
