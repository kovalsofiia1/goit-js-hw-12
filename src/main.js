import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iconUrl from './img/bi_x-octagon.svg';
import { getImages } from './js/server';


const searchBtn = document.querySelector('.search-button');
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const loader = document.querySelector('.loader-div');



const myParams = {
    key: '41582613-5fd86df2fe5af6dc3c1a0bcd8',
    type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
}


const handleResponse = async () => {
  try {
    const response = getImages(myParams);
    if (response.total === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
      hideLoader();
      return;
    }
    fillGallery(response.hits);
  }
  catch(error){
    showError('Error! No connection with server!');
    hideLoader();
  }
}

const handleSearch = async () => {
  myParams.q = input.value.trim().split(' ').join('+');
  clearGallery();
  showLoader();
  await handleResponse();
  clearSearch();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  handleSearch();
})


const showError = (text) => {
    iziToast.error({
      message:text,
      position: 'topRight',
      backgroundColor: 'red',
      messageColor:'white',
      iconUrl: `${iconUrl}`,
      iconColor: 'white',
    })
}
const clearGallery = () => {
  const galleryList = document.querySelector('.gallery-list');
  galleryList.innerHTML = '';
}

const clearSearch = () => {
  input.value = '';
}

const fillGallery = (itemsList) => {
  const galleryList = document.querySelector('.gallery-list');
  clearGallery();
    let content = '';

  content = itemsList.reduce((content, item) => {
    return content +
      `<li class="card">
            <a href="${item.largeImageURL}">
          <img
            src="${item.webformatURL}"
            alt="${item.tags}"
            class="image"
          />
          </a>
          <div class="description">
            <div class="desc-part">
              <span class="bold">Likes</span><span>${item.likes}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Views</span><span>${item.views}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Comments</span><span>${item.comments}</span>
            </div>
            <div class="desc-part">
              <span class="bold">Downloads</span><span>${item.downloads}</span>
            </div>
          </div>
        </li>
        `
  }, '');

  galleryList.innerHTML = content;
  hideLoader();
  gallery.refresh();
}


const hideLoader = () => {
  loader.style.display = 'none';
}

const showLoader = () => {
   loader.style.display = 'flex';
}


let gallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.1,
  captionsData:'alt',
});
