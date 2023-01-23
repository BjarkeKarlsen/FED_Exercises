import { useState } from "react";

export default function ToDo() {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");

  function addToDo(e) {
    if (!item) return;
    e.preventDefault();
    setTodos([...todos, item]);
    setItem("");
  }

  return (
    <div className="grid border  p-16 rounded-2xl  border-nicelyred justify-center transform bg-white w-full h-full text-center bg-opacity-60 border-opacity-10 ">
      <div className="grid gap-3 grid-rows-2">
        <h1 className="row-span-1 uppercase italic font-semibold text-nicelyred text-xl">
          T o D o <span>&nbsp;&nbsp;</span> l i s t !
        </h1>
        <div className=" grid gap-3 grid-cols-2 row-span-2 ">
          <input
            className="border border-nicelyred rounded-3xl p-2 text-nicelyred"
            type="text"
            placeholder=" e a t"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <button
            className="text-white border bg-nicelyred rounded-3xl border-none font-bold"
            onClick={addToDo}
          >
            Add Todo
          </button>
        </div>
        <div className="block lowercase text-nicelyred text-left">
          {todos.map((todos) => (
            <li>{todos}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
