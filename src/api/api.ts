const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchSurveys = async () => {
  const response = await fetch(`${BASE_URL}/api/surveys`);
  if (!response.ok) {
    throw new Error('Failed to fetch surveys');
  }
  return response.json();
};
