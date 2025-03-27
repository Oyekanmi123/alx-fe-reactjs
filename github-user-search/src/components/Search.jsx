// import { useState } from "react";

// function Search({ onSearch }) {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim() !== "") {
//       onSearch(query); // Trigger search function
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search GitHub Users"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default Search;

import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setUser(null);

    const userData = await fetchUserData(query);

    if (userData) {
      setUser(userData);
    } else {
      setError("Looks like we can't find the user.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub Users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.name || user.login}</h2>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;