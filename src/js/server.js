import axios, { Axios } from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
   headers: {
     "Content-Type": "application/json",
     
  }
});

const getAxiosData = (res) => res.data;

export const getImages = async (params) => {
        return getAxiosData(await instance.get('', { params: params }));
}
