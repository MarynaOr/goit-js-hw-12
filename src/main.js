import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  toggleLoadMoreButton,
  toggleLoader,
  showEndMessage,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let searchQuery = '';
let page = 1;
let totalHits = 0;

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

let galleryLightbox = new SimpleLightbox('.item-gallery a', {
  captionsData: 'alt',
  captionDelay: 300,
  className: 'bg-color',
});

form.addEventListener('submit', async e => {
  e.preventDefault();
  searchQuery = e.target.elements.search.value.trim();

  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'nothing entered',
    });
    return;
  }

  page = 1;
  totalHits = 0;
  clearGallery();

  toggleLoader(true);
  const data = await fetchImages(searchQuery, page);
  toggleLoader(false);

  if (data && data.hits.length > 0) {
    renderImages(data.hits);
    totalHits = data.totalHits;
    toggleLoadMoreButton(true);

    galleryLightbox.refresh();
  }

  if (totalHits <= page * 15) {
    toggleLoadMoreButton(false);
    showEndMessage();
  }
});

const clearGallery = () => {
  gallery.innerHTML = '';
  galleryLightbox.refresh();
};

loadMoreButton.addEventListener('click', async () => {
  page += 1;

  toggleLoader(true);
  const data = await fetchImages(searchQuery, page);
  toggleLoader(false);

  if (data && data.hits.length > 0) {
    renderImages(data.hits);
    totalHits = data.totalHits;

    galleryLightbox.refresh();
  }

  if (page * 15 >= totalHits) {
    toggleLoadMoreButton(false);
    showEndMessage(
      "We're sorry, but you've reached the end of search results."
    );
  }

  if (data?.hits?.length === 0) {
    toggleLoadMoreButton(false);
    showEndMessage('No results found. Try another search.');
    return;
  }
});
