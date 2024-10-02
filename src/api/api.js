import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

// const API_BASE_URL = 'https://api.phemesoft.com';

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

// Admin API calls
export const adminLogin = async (email, password) => {
    const response = await api.post('/admin/login', { email, password });
    return response.data;
};

export const getAdminProfiles = async () => {
    const response = await api.get('/admin/profile');
    return response.data;
};

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

// Function to post data to the backend
export const postDataToBackend = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data to backend:', error);
    throw error;
  }
};

export default api;