import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchSurveys = () => API.get('/api/surveys');
export const submitSurvey = (surveyId: string, data: any) => API.post(`/api/surveys/${surveyId}/submit`, data);

export default API;
