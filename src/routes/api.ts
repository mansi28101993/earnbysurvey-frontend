const BASE_URL = 'https://earnbysurvey-backend.onrender.com';

export async function fetchSurveys() {
  const res = await fetch(`${BASE_URL}/api/surveys`);
  if (!res.ok) throw new Error('Failed to fetch surveys');
  return res.json();
}
