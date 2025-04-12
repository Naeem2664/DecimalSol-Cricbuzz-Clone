import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

const Live_Match_Detail = () => {
    const params=useParams()
    const {id}=params
    const [match, setMatch] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchMatch = async () => {
        try {
            const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=22a3a082-2df1-4345-a554-38c4b30bb170`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            const specificMatch = data.data.find((match) => match.id === id)
            setMatch(specificMatch)
            console.log(match)
        } catch (error) {
            setError(error)
            console.error('Error fetching match:', error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchMatch()
        const interval = setInterval(() => {
            fetchMatch();
          }, 30000);
      
          return () => clearInterval(interval);
    }, [id])
   

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
                <h1>Error fetching match</h1>
                <p>{error.message}</p>
            </div>
        )
    }
    if (!match) {
        return <div className="text-center">No match details available.</div>
    }
    console.log(id)
    console.log(match)
    const matchDetails = {
        teamA: match.teams[0],
        teamB: match.teams[1],
        venue: match.venue,
        date: match.date,
        status: match.status,
        format: match.matchType,
        scoreA: `${match.score[1].r}/${match.score[1].w} (${match.score[1].o} Overs)`,
        scoreB: `${match.score[0].r}/${match.score[0].w} (${match.score[0].o} Overs)`,
        result: match.result,
      };
  return (
    <>
        <div className="container my-5">
      <div className="card shadow-lg p-4">
        <div className="text-center mb-4">
          <h2 className="fw-bold">{matchDetails.teamA} <span className="text-danger">vs</span> {matchDetails.teamB}</h2>
          <p className="text-muted mb-1">{matchDetails.venue}</p>
          <p className="text-muted">Date:{matchDetails.date}</p>
          <h4>{matchDetails.format.toUpperCase()}</h4>
          <span className="badge bg-success">{matchDetails.status}</span>
        </div>
        <hr />
        <div className="row text-center my-4">
          <div className="col-md-6 mb-3">
            <div className="border rounded p-3">
              <h5>{matchDetails.teamA}</h5>
              <h4 className="text-primary">{matchDetails.scoreA}</h4>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="border rounded p-3">
              <h5>{matchDetails.teamB}</h5>
              <h4 className="text-primary">{matchDetails.scoreB}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Live_Match_Detail
