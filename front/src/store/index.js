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
  }
  },
  actions: {
  },
  modules: {
  }
})
