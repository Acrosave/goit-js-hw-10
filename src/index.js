import { getCats, getCatByBreed } from './api.js';
const select = document.getElementById('idSelect');
const catSelect = document.getElementById('catInfo');
let loader = document.querySelector('.loader');

loader.classList.remove('hidden');

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
  loader.classList.add('hidden');
  let markup = api.data
    .map(
      value => `
  <img class="cat-info__cat-image lazyload blur-up" src="${value.url}" value-src="${value.url}" alt="Generic alt" width="400px" height="300px">
  <div class="cat-description">
  <h2 class="cat-description__cat-breed">${value.breeds[0].name}</h2>
  <p class="cat-description__cat-temperament">${value.breeds[0].description}</p>
  <h3 class="cat-description__cat-temperament">Temperament</h3>
  <p class="cat-description__cat-temperament">${value.breeds[0].temperament}</p>
  </div>`
    )
    .join(' ');
  catSelect.innerHTML = markup;
}
select.addEventListener('change', handleCatChange);
