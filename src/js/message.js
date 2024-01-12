import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import iconUrl from '../img/bi_x-octagon.svg';

export const showError = (text) => {
    iziToast.error({
      message:text,
      position: 'topRight',
      backgroundColor: 'red',
      messageColor:'white',
      iconUrl: `${iconUrl}`,
      iconColor: 'white',
    })
}

export const showMessage = (text) => {
    iziToast.error({
      message:text,
      position: 'topRight',
      backgroundColor: 'green',
      messageColor:'white',
      iconColor: 'white',
    })
}