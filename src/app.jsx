import React, { useEffect, useState } from 'react';
import axios from 'axios';
import.meta.env.VITE_API_URL
function App() {
  const [surveys, setSurveys] = useState([]);
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/surveys`)
      .then(res => {
        setSurveys(res.data);
      })
      .catch(err => {
        console.error('❌ Error fetching surveys:', err.message);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '4rem', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '3rem', color: '#1d2d44' }}>Earn by Survey</h1>

      {error ? (
        <p style={{ color: 'red', fontSize: '1.2rem' }}>⚠️ Error loading data</p>
      ) : surveys.length === 0 ? (
        <p style={{ fontSize: '1.2rem' }}>⏳ Loading...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {surveys.map((survey, index) => (
            <li key={index} style={{
              background: '#f4f4f4',
              margin: '1rem auto',
              padding: '1rem',
              borderRadius: '8px',
              maxWidth: '500px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <strong>{survey.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
