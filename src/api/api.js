import axios from 'axios';

// const API_BASE_URL = 'http://localhost:4000/api';

const API_BASE_URL = 'https://api.phemesoft.com/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



// Function to get data from the backend
export const getDataFromBackend = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from backend:', error);
    throw error;
  }
};

export const postDataToBackend = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data to backend:', error);
    throw error;
  }
};

// Admin API calls
export const adminLogin = async (email, password) => {
  const response = await api.post('/admin/login', { email, password });
  return response.data;
};

export const getAdminProfiles = async () => {
  const response = await api.get('/admin/profile');
  return response.data;
};


// SPOC API calls
export const spocLogin = async (email, password) => {
  const response = await api.post('/spoc/login', { email, password });
  return response.data;
};

export const getSpocProfiles = async () => {
  const response = await api.get('/spoc/profile');
  return response.data;
};

export default api;