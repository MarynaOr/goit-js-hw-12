import { fetchImg } from "./js/pixabay-api";
import { createMarkup, showLoadingMessage, hideLoadingMessage,} from "./js/render-functions";


import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form')
const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader')
let search ='';

const galleryImage = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 300,
  });

form.addEventListener('submit', handleSubmit)

function handleSubmit (e){
    e.preventDefault();
    search =e.target.elements.search.value.trim();

    if(search === ''){
        iziToast.warning({
            title: 'Caution',
            message: 'The field is empty, please type your request',
          
        })
        return
    }
    if(search){
        showLoadingMessage(loader)
    }



fetchImg(search)
.then(response => {
  if (response.total === 0) {
    gallery.innerHTML = '';
    throw new Error();
  }
  hideLoadingMessage(loader);

  return response.data.hits;
})
.then(image => {
    gallery.innerHTML = '';
    hideLoadingMessage(loader);

    gallery.innerHTML = createMarkup(image);
    search = '';
    galleryImage.refresh();
  })
  .catch(() => {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  });


}
