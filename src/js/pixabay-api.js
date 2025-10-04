import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '52601802-71ac4fbf0a7c54a08716d644c';

export default function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return axios.get(`${API_URL}?${searchParams}`).then(result => {
    return result.data.hits;
  });
}