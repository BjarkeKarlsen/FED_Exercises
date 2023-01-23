import useState from "react";

export function SearchStudent() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Search Student</h1>
      <input type="text" placeholder="Search Student" value={search} onChange />
      <button>Search</button>
    </div>
  );
}
