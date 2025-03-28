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
    <div className="p-6 w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-800">
        GitHub User Search
      </h1>
      
      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-3">
        <input
          type="text"
          placeholder="Search GitHub Users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="number"
          placeholder="Min Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Loading & Error Messages */}
      {loading && <p className="text-center mt-4 text-gray-600">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Display Single User */}
      {user && (
        <div className="mt-6 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto shadow-md"
          />
          <h2 className="text-lg font-semibold mt-2">{user.name || user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Profile
          </a>
        </div>
      )}

      {/* Display Multiple Users */}
      {users.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Search Results:</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {users.map((u) => (
              <li key={u.id} className="flex flex-col items-center p-4 border rounded-lg shadow-md">
                <img
                  src={u.avatar_url}
                  alt={u.login}
                  className="w-16 h-16 rounded-full"
                />
                <h3 className="font-semibold mt-2">{u.login}</h3>
                <a
                  href={u.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;