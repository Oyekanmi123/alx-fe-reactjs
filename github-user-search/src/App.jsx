import { useState } from "react";
import fetchGitHubUser from "./services/api";

function App() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    const data = await fetchGitHubUser(query);
    setUser(data);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <input 
        type="text" 
        placeholder="Search GitHub Users" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;