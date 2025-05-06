const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchSurveys = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/surveys`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('API fetch failed:', error);
    throw error;
  }
};
