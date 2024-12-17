import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}" data-lightbox="gallery">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
};


export const toggleLoadMoreButton = isVisible => {
  const loadMoreButton = document.querySelector('.load-more');
  if (isVisible) {
    loadMoreButton.style.display = 'block';
  } else {
    loadMoreButton.style.display = 'none';
  }
};


