import { useState } from "react";
import User from "./User/User";

function FetchUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    setLoading(true);
    setError(null);
    const randomId = Math.floor(Math.random() * 10) + 1;
    
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${randomId}`
      );

      if (!response.ok) {
        throw new Error("Error Fetching User Data");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {loading ? (
        <button
          className="btn btn-info disabled w-100"
          onClick={fetchRandomUser}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </button>
      ) : (
        <button className="btn w-100 btn-info" onClick={fetchRandomUser}>
          Get Random User
        </button>
      )}

      {/* Display error message */}
      {error && <p className="text-light bg-danger my-2">{error}</p>}

      {/* Display user data */}
      <User userData={user}/>
    </div>
  );
}

export default FetchUser;
