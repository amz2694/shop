<template>
  <div class="checkout-container">
      <div class="checkoutAdddress-container">
          <p class="addressTittle">Shipping address</p>
          <input type="text" class="name-input" placeholder="name">
          <input type="text" class="city-input" placeholder="city">
          <input type="text" class="number-input" placeholder="number">
          <input type="text" class="address-input" placeholder="address">
          <div class="button-container">
              <button class="return">return to cart</button>
              <button class="continue" @click="checkout">Continue to shipping</button>
          </div>
      </div>
      <div class="checkoutCart-container">
          <p class="itemsNumber">3 items</p>
          <div class="checkout-cart-container">
              <checkoutProduct v-for="(item, index) in cart" :key="index" :item="item"/>
          </div>
          <div class="subtotalcontainer">
              <p>subtotal</p>
              <p>{{ this.$store.state.totalCart }}</p>
          </div>
          <div class="shippingcontainer">
              <p>shipping</p>
              <p>20</p>
          </div>
          <div class="totalpaycontainer">
              <p>Total to pay</p>
              <p>{{ this.$store.state.totalCart + 20 }}</p>
          </div>
      </div>
  </div>
  <login v-if="showLogin" @closeLogin="toggleViewLogin"/>
</template>

<script>
import checkoutProduct from '../components/checkoutProduct.vue';
import login from '../components/login.vue'
import axios from 'axios';

export default {
    name: 'App',
    components: {checkoutProduct ,login},
    data () {
        return {
            showLogin : false,
            cart : [],
            accessToken : ''
        }
    },
    async beforeMount() {
        this.cart = this.$store.state.cart;
        this.accessToken = this.$store.state.accessToken;
        if (this.accessToken) {
            await axios
                .get('https://localhost:8000/api/v1/refresh', {withCredentials: true})
                .then(res => {
                    this.accessToken = res.data.accessToken;
                    this.showLogin = false;
                })
                .catch(err => {
                    this.showLogin = true;
                    console.log(err);
                })
            } else {
                this.showLogin = true;
            }
    },
    methods : {
        async checkout () {
            const config = {
                headers: { Authorization: `Bearer ${this.accessToken}` }
            };
            let reqcart = [];
            for (let i in this.cart) {
                    reqcart.push(this.cart[i])
            }
            const reqBody = {
                "payment" : "test2",
                "cart" : reqcart
            }
            console.log(reqBody)
            await axios
                .post('https://localhost:8000/api/v1/cart',reqBody,config)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
            })
        },
        toggleViewLogin(accessToken) {
            this.showLogin = !this.showLogin;
            if (accessToken) {
                this.accessToken = accessToken;
                this.checkout();
                this.$store.state.accessToken = accessToken;
                this.$store.commit('saveToken');
            }
        }
    }
}
</script>

<style src="../style/checkout.css">

</style>