import { getCats, getCatByBreed } from './api.js';
const select = document.getElementById('idSelect');
async function fetchCats() {
  const api = await getCats();
  let markup = api.data
    .map(value => `<option value="${value.id}">${value.name}</option>`)
    .join(' ');
  select.innerHTML = markup;
}
fetchCats();
async function handleCatChange(event) {
  const api = await getCatByBreed(event.target.value);
  console.log(api);
}
addEventListener('change', handleCatChange);
