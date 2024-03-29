import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cart : [],
    accessToken : '',
    totalCart : 0
  },
  mutations: {
    initToken (state) {
      if (localStorage.getItem('accessToken')) {
        try {
          state.accessToken = JSON.parse(localStorage.getItem('accessToken'));
        } catch (err) {
          console.log(err);
          localStorage.removeItem('accessToken');
        }
      }
    },
    saveToken(state) {
      const parsed = JSON.stringify(state.accessToken);
      localStorage.setItem('accessToken', parsed);
    },
    initCart(state) {
      if (localStorage.getItem('cart')) {
        try {
          state.cart = JSON.parse(localStorage.getItem('cart'));
        } catch (err) {
          console.log(err);
          localStorage.removeItem('cart');
        }
      }
    },
    saveCart(state) {
      const parsed = JSON.stringify(state.cart);
      localStorage.setItem('cart', parsed);
    },
    addToCart (state,item) {
      const exists = state.cart.filter(i => i.id === item.id)
      if (exists.length) {
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
        console.log('exist')
      } else {
        state.cart.push(item);
      }
      this.commit('saveCart',state.cart);
    },
  },
  actions: {
    async totalCart ({state ,commit}) {
      state.totalCart = 0;
      for (let i in state.cart) {
      await axios
          .get('https://localhost:8000/api/v1/product',{params : {ID : state.cart[i].id}})
          .then(res => {
              let price = res.data[0].price;
              state.totalCart += price*state.cart[i].quantity;
          })
          .catch(err => {
              console.log(err);
      })
  }
  } 
  },
  modules: {
  }
})
