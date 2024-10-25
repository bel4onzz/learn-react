import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = (name = '') => axios.get(`${API_URL}?name=${name}`);
export const fetchCharacterById = (id) => axios.get(`${API_URL}/${id}`);
