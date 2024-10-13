import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

// const API_BASE_URL = 'https://api.phemesoft.com/api';

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

// Faculty API calls
export const facultyLogin = async (email, password) => {
  const response = await api.post('/faculty/login', { email, password });
  return response.data;
};

export const getFacultyProfiles = async () => {
  const response = await api.get('/faculty/profile');
  return response.data;
};

// Student API calls
export const studentLogin = async (email, password) => {
  const response = await api.post('/student/login', { email, password });
  return response.data;
};

export const getStudentProfiles = async () => {
  const response = await api.get('/student/profile');
  return response.data;
};

// Function to fetch meetings
export const fetchMeetings = async (section) => {
  try {
    const response = await api.get(`/meeting/meetings`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error('Unexpected response format:', response.data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching meetings:', error);
    return [];
  }
};

export const createMeeting = async (meetingTitle, section, facultyId, facultyName) => {
  try {
    const response = await api.post('/meeting/create-meeting', {
      meetingTitle,
      section,
      facultyId,
      facultyName,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating meeting:', error);
    throw error;
  }
};

export default api;