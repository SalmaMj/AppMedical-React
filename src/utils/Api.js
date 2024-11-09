import axios from 'axios';

const axiosSecure = () => {
 

  // Create instance
  let instance = axios.create({
    baseURL: "http://localhost:8080", //DEV URL
    headers: {
        'Content-Type': 'application/json',
      },});
;

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
  });

  return instance;
};

export default axiosSecure();