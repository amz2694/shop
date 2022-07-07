<template>
  <div class="cartItem-container">
      <img src="../assets/prof.png" class="itemimg">
      <p class="itemtitle">test</p>
      <p class="itemprice">250</p>
      <div class="qty-container">
          <img src="../assets/back.png" class="back" @click="minus">
          <p class="qty">2</p>
          <img src="../assets/forward.png" class="forward" @click="plus">
      </div>
      <p class="totalprice">500</p>
      <img src="../assets/close.png" class="delete" @click="removeFromCart">
  </div>
</template>

<script>
export default {
    name: 'cartItem',
    data() {
      return {
        product : this.item,
        //cart : []
      }
    },
    props : ["item"],
    beforeMount() {
      //this.cart = this.$store.state.cart;
    },
    methods : {
      plus () {
        this.$store.state.cart.forEach( item => {
          if (item.id == this.product.id) {
            this.product.quantity += 1;
          }
        } )
        this.$store.commit('saveCart',this.$store.state.cart);
      },
      minus () {
        this.$store.state.cart.forEach( item => {
        if (item.id == this.product.id) {
          if (this.product.quantity == 1) {
            this.$emit("removeFromCart", item);
          }
          this.product.quantity -= 1;
        }
        })
        this.$store.commit('saveCart',this.$store.state.cart);
      },
      removeFromCart() {
        this.$emit("removeFromCart", this.item);
        this.$store.commit('saveCart',this.$store.state.cart);
      },
    }
}
</script>

<style src="../style/cartItem.css">

</style>