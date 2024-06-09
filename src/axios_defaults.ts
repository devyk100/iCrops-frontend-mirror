import axios from 'axios';

export const backendUrl = `${window.location.protocol}//${window.location.hostname}:your_backend_port`;

axios.defaults.baseURL = `${backendUrl}/api`; // Set base URL for Axios globally