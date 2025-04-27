import React, { useEffect, useState } from 'react';
import { fetchSurveys } from '../routes/api';

const Home = () => {
  const [surveys, setSurveys] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchSurveys()
      .then(setSurveys)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Available Surveys</h1>
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul className="space-y-2">
        {surveys.map((survey, i) => (
          <li key={i} className="p-4 border rounded-md shadow">
            {survey.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
