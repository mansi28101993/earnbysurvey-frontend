import { useEffect, useState } from 'react';

interface Survey {
  _id: string;
  title: string;
  description: string;
  category: string;
}

function Home() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 👇 Call backend API to fetch surveys
    fetch('https://earnbysurvey-backend.onrender.com/api/surveys')
      .then((res) => res.json())
      .then((data) => {
        setSurveys(data);
      })
      .catch((err) => {
        console.error('Error fetching surveys:', err);
        setError('Failed to fetch surveys');
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Available Surveys</h1>

      {error && <p className="text-red-500">Error: {error}</p>}

      <ul className="space-y-4">
        {surveys.map((survey) => (
          <li key={survey._id} className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-semibold">{survey.title}</h2>
            <p className="text-gray-600">{survey.description}</p>
            <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {survey.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
