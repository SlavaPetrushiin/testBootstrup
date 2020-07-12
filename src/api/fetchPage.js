import axios from 'axios';

export const fetchPageApi = {
  fetchGet(){
      return axios.get('https://testbootstrap-6c937.firebaseio.com/page.json').then(res => {
          return res.data
      })
  }
};