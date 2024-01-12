import axios, { Axios } from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
   headers: {
     "Content-Type": "application/json",
  },
  params: {
      key: '41582613-5fd86df2fe5af6dc3c1a0bcd8',
    type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
   },
});

const getAxiosData = (res) => res.data;

export const getImages = async (params) => {
  return getAxiosData(await instance.get('', { params: params }));
}
