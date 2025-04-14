import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../styles/live-matches.css";
import { Link } from "react-router-dom";
import Keys from "../APIs/API_KEY";
const Live_Matches = () => {
  const [matches, setMatches] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  const fetchMatches = async () => {
    try {
      const response = await fetch(
        `https://api.cricapi.com/v1/currentMatches?apikey=${Keys.API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMatches(data.data);
    } catch (error) {
      setError(error);
      console.error("Error fetching matches:", error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchMatches();

    const interval = setInterval(() => {
      fetchMatches();
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  if (loading) {
    return (
      <div className="text-center">
      <Spinner animation="grow" variant="success" />
      <p>Please wait while we fetch the latest match information.</p>
      <p>Refreshing every 30 seconds...</p>
      <p>Feel free to check back later!</p>
      <p>Thank you for your patience!</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="text-center">
        <h1>Error fetching matches</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  if (matches.length === 0) {
    return <div className="text-center">No live matches available.</div>;
  }
  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">Live Matches</h1>
        <div className="row">
          {matches?.map((match, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <Link to={`/live_match/${match.id}`} className="text-decoration-none">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h4 className="card-title">{match.name}</h4>
                  <p className="card-text">Venue: {match.venue}</p>
                  <pre>
                    <span
                      className={`badge ${
                        match.matchEnded=== false
                          ? "bg-danger"
                          : "bg-success"
                      } bg-success p-2 rounded`}
                      id="match"
                    >
                      {match.status}
                    </span>
                  </pre>
                </div>
              </div>
              </Link>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Live_Matches;
