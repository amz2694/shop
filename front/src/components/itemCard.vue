<template>
  <div class="card-container">
      <div class="uppercard">
          <img src="../assets/prof.png" class="card-img">
          <img src="../assets/plus.png" class="plus" @click="addToCart">
      </div>
      <div class="downercard">
          <p class="title">{{ product.commodityName }}</p>
          <p class="price">{{ product.price }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'itemCard',
    props : {
        item : Object
    },
    data() {
        return {
            cart : [],
            product : this.item
        }
    },
    beforeMount() {
        this.cart = this.$store.state.cart;
    },
    methods : {
        addToCart () {
            let item = {
                id : this.item.commodityID,
                quantity : 1
            }
            this.$store.commit('addToCart',item);
        }
    }
}
</script>

<style src="../style/card.css">

</style>