<template>
  <div class="cartItem-container">
      <img src="../assets/prof.png" class="itemimg">
      <p class="itemtitle">{{ product.commodityName }}</p>
      <p class="itemprice">{{ product.price }}</p>
      <div class="qty-container">
          <img src="../assets/back.png" class="backwardd" @click="minus">
          <p class="qty">{{ item.quantity }}</p>
          <img src="../assets/forward.png" class="forwardd" @click="plus">
      </div>
      <p class="totalprice">{{ item.quantity*product.price }}</p>
      <img src="../assets/close.png" class="delete" @click="removeFromCart">
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'cartItem',
    data() {
      return {
        product : {},
      }
    },
    props : ["item"],
    async beforeMount () {
      await axios
        .get('https://localhost:8000/api/v1/product',{params : {ID : this.item.id}})
        .then(res => {
          this.product = res.data[0];
        })
        .catch(err => {
          console.log(err);
      })
    },
    methods : {
      plus () {
        this.$store.state.cart.forEach( i => {
          if (i.id == this.item.id) {
            this.item.quantity += 1;
          }
        } )
        this.$store.commit('saveCart',this.$store.state.cart);
        this.$store.dispatch('totalCart');
      },
      minus () {
        this.$store.state.cart.forEach( i => {
        if (i.id == this.item.id) {
          if (this.item.quantity == 1) {
            this.$emit("removeFromCart", i);
          }
          this.item.quantity -= 1;
        }
        })
        this.$store.commit('saveCart',this.$store.state.cart);
        this.$store.dispatch('totalCart');
      },
      removeFromCart() {
        this.$emit("removeFromCart", this.item);
        this.$store.commit('saveCart',this.$store.state.cart);
        this.$store.dispatch('totalCart');
      },
    }
}
</script>

<style src="../style/cartItem.css">

</style>