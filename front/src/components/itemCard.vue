<template>
  <div class="card-container">
      <div class="uppercard">
          <img src="../assets/prof.png" class="card-img">
          <img src="../assets/plus.png" class="plus" @click="addToCart">
      </div>
      <div class="downercard">
          <p class="title">test</p>
          <p class="price">500</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'itemCard',
    data() {
        return {
            cart : []
        }
    },
    beforeMount() {
        this.cart = this.$store.state.cart;
    },
    methods : {
        addToCart () {
            let item = {
                id : 1,
                quantity : 1
            }
            this.$store.commit('addToCart',item);
        }
    }
}
</script>

<style src="../style/card.css">

</style>