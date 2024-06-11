import { fetchImages } from './js/pixabay-appi';
import { renderMarkup } from './js/render-functions';


import alert from './img/alert.svg';
import caution from './img/сaution.svg';

// SimpleLightBox library
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// iziToast library
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormElem = document.querySelector('.search-form');
const searchInputElem = document.querySelector('.search-input');
const searchBtnElem = document.querySelector('.search-btn');
const standBySpanElem = document.querySelector('.loader-hidden');
const galleryElem = document.querySelector('.gallery');
let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

searchBtnElem.addEventListener('click', event => {
  event.preventDefault();
  if (!searchInputElem.value.trim()) {
    searchFormElem.reset();
    return;
  }
  galleryElem.innerHTML = '';
  standBySpanElem.classList.remove('visually-hidden');
  fetchImages(searchInputElem.value.trim())
    .then(data => {
      if (!data.total) {
        iziToast.error({
          iconUrl: alert,
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      galleryElem.insertAdjacentHTML('afterbegin', renderMarkup(data));
      gallery.refresh();
      standBySpanElem.classList.add('visually-hidden');
    })
    .catch(error => {
      iziToast.warning({
        iconUrl: caution,
        position: 'topRight',
        message: `${error}`,
      });
    });
  searchFormElem.reset();
});