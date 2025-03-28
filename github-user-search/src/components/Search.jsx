import { useState } from "react";
import { fetchUserData, fetchUsersBySearch } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    setUsers([]);

    try {
      if (location || minRepos) {
        // Advanced Search
        const searchResults = await fetchUsersBySearch(query, location, minRepos);
        if (searchResults.length > 0) {
          setUsers(searchResults);
        } else {
          setError("No users found with the given criteria.");
        }
      } else {
        // Basic Search
        const userData = await fetchUserData(query);
        if (userData) {
          setUser(userData);
        } else {
          setError("Looks like we can't find the user.");
        }
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Search GitHub Users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Display Single User */}
      {user && (
        <div className="mt-6 text-center">
          <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
          <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View Profile
          </a>
        </div>
      )}

      {/* Display Multiple Users */}
      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul>
            {users.map((u) => (
              <li key={u.id} className="flex items-center space-x-4 p-2 border-b">
                <img src={u.avatar_url} alt={u.login} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">{u.login}</h3>
                  <a href={u.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;