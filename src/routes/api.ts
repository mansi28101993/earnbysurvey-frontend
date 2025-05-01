const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchSurveys = async () => {
  const res = await fetch(`${BASE_URL}/api/surveys`);
  if (!res.ok) {
    throw new Error('Failed to fetch surveys');
  }
  return res.json();
};
