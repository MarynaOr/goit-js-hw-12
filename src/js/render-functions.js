import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
      <li class='item-gallery' data-id='${image.id}'>
      <a class='link-gallery' href='${image.largeImageURL}'>
        <img 
          class='img-gallery'
          src='${image.webformatURL}'
          alt='${image.tags}'
          loading="lazy"
          width='360'
          height='200'
        >
        <ul>
          <li class='info-img'><span>Likes</span>${image.likes}</li>
          <li class='info-img'><span>Views</span>${image.views}</li>
          <li class='info-img'><span>Comments</span>${image.comments}</li>
          <li class='info-img'><span>Downloads</span>${image.downloads}</li>
        </ul>
      </a>
    </li>
      `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
};

{
  /* <li class="gallery-item">
        <a href="${image.largeImageURL}" class='a' data-lightbox="gallery">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
      </li> */
}
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
