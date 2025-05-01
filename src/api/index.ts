const BASE_URL = import.meta.env.VITE_API_URL; // uses environment variable

export async function fetchSurveys() {
  try {
    const response = await fetch(`${BASE_URL}/api/surveys`);
    if (!response.ok) {
      throw new Error('Failed to fetch surveys');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching surveys:', error);
    throw error;
  }
}
