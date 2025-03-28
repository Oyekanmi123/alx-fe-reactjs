import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};



// Fetch users by search criteria (username, location, minRepos)
export const fetchUsersBySearch = async (query, location, minRepos) => {
  try {
    const searchQuery = [
      query ? `${query} in:login` : "",
      location ? `location:${location}` : "",
      minRepos ? `repos:>${minRepos}` : "",
    ]
      .filter(Boolean)
      .join("+");

    const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`, {
      headers: {
        Authorization: `token ${GITHUB_API_KEY}`,
      },
    });

    return response.data.items; // GitHub Search API returns results inside `items`
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};