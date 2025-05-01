// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import { fetchSurveys } from '../api/api';

interface Survey {
  _id: string;
  title: string;
  description: string;
  questions: {
    _id: string;
    question: string;
    options: string[];
  }[];
  reward: number;
}

export default function Home() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSurveys() {
      try {
        console.log('Fetching surveys from:', import.meta.env.VITE_API_BASE_URL);
        const data = await fetchSurveys();
        console.log('Surveys fetched:', data);
        setSurveys(data);
      } catch (err) {
        console.error('Error fetching surveys:', err);
        setError('Failed to load surveys. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    loadSurveys();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-3xl mt-20 font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-3xl mt-20 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Available Surveys</h1>
      {surveys.length === 0 ? (
        <p className="text-center">No surveys available.</p>
      ) : (
        surveys.map((survey) => (
          <div key={survey._id} className="border p-4 mb-6 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{survey.title}</h2>
            <p className="mb-2">{survey.description}</p>
            {survey.questions && survey.questions.length > 0 && (
              <ul className="list-disc list-inside">
                {survey.questions.map((q) => (
                  <li key={q._id}>{q.question}</li>
                ))}
              </ul>
            )}
            <p className="mt-2 text-green-600">Reward: {survey.reward} coins</p>
          </div>
        ))
      )}
    </div>
  );
}
