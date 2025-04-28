import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://earnbysurvey-backend.onrender.com/api/surveys')
      .then(response => {
        setSurveys(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching surveys:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading surveys...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Available Surveys</h1>
      <ul className="space-y-4">
        {surveys.length === 0 ? (
          <li>No surveys available</li>
        ) : (
          surveys.map((survey: any, index: number) => (
            <li key={index} className="border p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{survey.title}</h2>
              <p>{survey.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
