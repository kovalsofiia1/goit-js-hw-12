import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from './js/server';
import { showError, showMessage } from './js/message';

const searchBtn = document.querySelector('.search-button');
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const loader = document.querySelector('.loader-div');
const loadBtn = document.querySelector('.load-button');

let page = 1;
let doFetch = null;
let hits = [];
let query = '';

const handleSearch = async () => {
  if (doFetch !== null) {
    loadBtn.removeEventListener('click', doFetch); // видалення попередньої пагінації при новому пошуку
    doFetch = null;
  }

  hideLoadBtn();
  clearGallery();

  query = getSearch();
  if (!query) {
    showMessage('Input your request!');
    return;
  };

  const imagesRequest = createImagesRequest(query); //екземпляр функції через замикання

  doFetch = async () => { // завантаження наступгої сторінки: стягує зображення через imagesRequest, відмальовує і прогортує
    try {
      hits = await makePromiseWithLoader(imagesRequest);
      fillGallery(hits);
      scrollPage();
    }
    catch (error) {
      console.log(error.message);
    }
  }

  try {
    await makePromiseWithLoader(doFetch); // відображає перші стягнуті зображення 
  }
  catch (error) {
    console.log(error.message);
  }

  loadBtn.addEventListener('click', doFetch); //додає doFetch до Load more
  
  clearSearch();
  
}

const scrollPage = () => {
  const card = document.querySelector('.card');
  const vals = card.getBoundingClientRect();
  if (page - 1 > 1) window.scrollBy({ top: vals.height * 2, behavior: 'smooth' });

}

const getSearch = () => {
  return input.value.trim().split(' ').join('+');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  handleSearch();
})



const fillGallery = (itemsList) => {
  const galleryList = document.querySelector('.gallery-list');
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

  galleryList.insertAdjacentHTML('beforeend',content);
  gallery.refresh();
}

const createImagesRequest = (q) => {
  page = 1;
  const per_page = 40;
  let isLastPage = false;

  return async () => {
    try {
      if (isLastPage) return [];
      const { hits, total } = await getImages({ q, page, per_page });

      if (total === 0) {
        hideLoadBtn();
        showError('Sorry, there are no images matching your search query. Please try again!');
      }
      else if (page >= Math.ceil(total / per_page)) {
        isLastPage = true;
        hideLoadBtn();
        showMessage('We\'re sorry, but you\'ve reached the end of search results.');
      }
      else {
        showLoadBtn();
      }

      page += 1;
      
      return hits ;

    }
    catch (error) {
      showError('Error! No connection with server!');
    }
  }

}



const makePromiseWithLoader = async(promise) => {
  showLoader();
  try {
    const resp = await promise();
    return resp;
  }
  catch (error) {
    console.log(error.message);
  }
  finally {
    hideLoader();
  }
}

const showLoadBtn = () => {
  loadBtn.style.display = 'flex';
}
const hideLoadBtn = () => {
  loadBtn.style.display = 'none';
}

const clearGallery = () => {
  const galleryList = document.querySelector('.gallery-list');
  galleryList.innerHTML = '';
}

const clearSearch = () => {
  input.value = '';
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
