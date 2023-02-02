import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: '31766266-b4c442347c7d8dfc69a6e358e',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

const fetchImages = async (query, page) => {
  return await axios.get(`${BASE_URL}?${searchParams}&q=${query}&page=${page}`);
};

export default fetchImages;
