<template>
  <div class="shop-container">
      <div class="category-contaienr">
          <p class="category">man</p>
          <p class="category">woman</p>
          <p class="category">discount</p>
      </div>
      <div class="commodityscontainer">
          <card/>
          <card/>
          <card/>
          <card/>
          <card/>
          <card/>
      </div>
  </div>
</template>

<script>
import card from '../components/itemCard.vue'

export default {
    name: 'shop',
    components: {card}
}
</script>

<style src="../style/shop.css">

</style>