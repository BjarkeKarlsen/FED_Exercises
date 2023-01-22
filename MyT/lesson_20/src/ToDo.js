import { useState } from "react";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  function addToDo(e) {
    e.preventDefault();
    setTodos([...todos, item]);
    setItem("");
  }

  return (
    <div>
      <h1>ToDo-list!</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addToDo}>Add Todo</button>

      {todos.map((todos) => (
        <li>{todos}</li>
      ))}
    </div>
  );
}
