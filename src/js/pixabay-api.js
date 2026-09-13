import axios from 'axios';

const API_KEY = '23881814-4fbf0e1aa0af3ee5c2b937608';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get(BASE_URL, { params: searchParams });
  return response.data;
}
