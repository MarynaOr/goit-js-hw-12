import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47645708-0e2c2a3797788683efa376261';

export const fetchImages = async (searchQuery, page = 1, perPage = 15) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        page,
        per_page: perPage,
        image_type: 'photo',
        orientation: 'horizontal',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};
