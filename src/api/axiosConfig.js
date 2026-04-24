import axios from 'axios';

// Configuration de base d'Axios pour votre backend Laravel
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Remplacez par l'URL de votre API Laravel si différente
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Intercepteur pour ajouter le Token automatiquement si l'utilisateur est connecté
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;