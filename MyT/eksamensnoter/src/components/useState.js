import React from "react";

function useState() {
  const defaultvalue = 2;
  //useState is a hook that takes a default value
  const [state, setState] = useState("defaultvalue");

  //onChanged/onClick/event change state by giving new value to setState
  setState("newvalue");

  return <div>useState</div>;
}

export default useState;
