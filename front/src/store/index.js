import { createStore } from 'vuex'

export default createStore({
  state: {
    cart : [],
  },
  mutations: {
    initCart(state) {
      console.log('hey');
      if (localStorage.getItem('cart')) {
        try {
          state.cart = JSON.parse(localStorage.getItem('cart'));
          //console.log(state.cart);
        } catch (err) {
          console.log(err);
          localStorage.removeItem('cart');
        }
      }
    },
    saveCart(newCart) {
      const parsed = JSON.stringify(newCart.cart);
      localStorage.setItem('cart', parsed);
      this.commit('initCart');
    }
  },
  actions: {
  },
  modules: {
  }
})
