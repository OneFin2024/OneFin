import axios from 'axios';

const API_URL = 'http://localhost:9987/api/auth/';

// Register user
const signup = async (userData) => {
    try {
      const response = await axios.post(API_URL + 'signup', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
  
  // Login user
  const login = async (userData) => {
    try {
      const response = await axios.post(API_URL + 'login', userData);
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  signup,
  login,
  logout,
};

export default authService;
