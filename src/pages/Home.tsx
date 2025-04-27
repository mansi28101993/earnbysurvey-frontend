import { useEffect, useState } from 'react';
import axios from 'axios';

interface Survey {
  _id: string;
  title: string;
}

function Home() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://earnbysurvey-backend.onrender.com/api/surveys') // ✅ Backend API URL
      .then(response => {
        setSurveys(response.data);
      })
      .catch(error => {
        console.error('Error fetching surveys:', error);
        setError('Failed to load surveys. Please try again later.');
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Available Surveys 📋</h1>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      <div className="w-full max-w-md space-y-4">
        {surveys.length > 0 ? (
          surveys.map((survey) => (
            <div key={survey._id} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">{survey.title}</h2>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No surveys available right now.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
