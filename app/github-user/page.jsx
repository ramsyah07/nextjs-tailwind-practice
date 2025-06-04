"use client";
import { useState } from "react";

export default function GithubUserDemo() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.ok) {
      const data = await res.json();
      setUserData(data);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">🔍 GitHub User Lookup</h1>
      <input
        className="border p-2 rounded mr-2"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUser} className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>

      {userData && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 rounded-full" />
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
}
