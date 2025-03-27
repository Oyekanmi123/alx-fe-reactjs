import { useState } from "react";
import SearchBar from "./components/SearchBar"; 
function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar query={query} setQuery={setQuery} /> {/* Use SearchBar here */}
    </div>
  );
}

export default App;