import axios from 'axios';

axios.defaults.headers.common[
  'x-api-key'
] = `live_J7nML8NXgMZHEqHIK3gql8EJO9MbnZPmt0nhvhERPae60gvh9DmKV1KlAfRacqOg`;

async function getCats() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response;
  } catch (error) {
    console.log(error);
  }
}
async function getCatByBreed(id) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
export { getCats, getCatByBreed };
