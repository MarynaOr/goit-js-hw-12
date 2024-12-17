import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
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

export const toggleLoader = isVisible => {
  const loader = document.querySelector('.loader');
  if (isVisible) {
    loader.style.display = 'block';
  } else {
    loader.style.display = 'none';
  }
};

export const showEndMessage = () => {
  const loadMoreButton = document.querySelector('.load-more');
  loadMoreButton.style.display = 'none';

  iziToast.warning({
    title: 'No more results',
    message: "We're sorry, but you've reached the end of search results.",
  });
};
