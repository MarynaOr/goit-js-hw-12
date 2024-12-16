import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47645708-0e2c2a3797788683efa376261';

export async function fetchImg(search){
 const params = new URLSearchParams({  
  key: API_KEY,
        q: search,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,

})
const data = await axios.get(`${BASE_URL}?${params}`)
return data;
}













