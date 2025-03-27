// import { useState } from "react";
// import Search from "./components/Search";
// import fetchUserData from "./services/githubService";

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSearch = async (username) => {
//     setLoading(true);
//     setError("");
//     setUser(null);

//     const userData = await fetchUserData(username);

//     if (userData) {
//       setUser(userData);
//     } else {
//       setError("Looks like we can't find the user.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <h1>GitHub User Search</h1>
//       <SearchBar onSearch={handleSearch} />
      
//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}
//       {user && (
//         <div>
//           <img src={user.avatar_url} alt={user.login} width={100} />
//           <h2>{user.name || user.login}</h2>
//           <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import Search from "./components/Search";

function App() {
  return (
    <div>
      <Search />
    </div>
  );
}

export default App;