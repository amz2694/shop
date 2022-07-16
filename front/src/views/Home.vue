<template>
  <div class="home">
    <div class="upper">
      <div class="categorycontaienr">
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
      </div>
    </div>
    <div class="banner-container"></div>
    <div class="showcases-container">
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">Free Shipping</p>
          <p class="text-dis">Free shipping for cart above 500</p>
        </div>
        <img src="../assets/shipping.png" class="showcase-img">
      </div>
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">Support</p>
          <p class="text-dis">7 Days week 24 hours day with you</p>
        </div>
        <img src="../assets/support.png" class="showcase-img">
      </div>
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">Browse</p>
          <p class="text-dis">Browse in our huuuge collection</p>
        </div>
        <img src="../assets/perfume.png" class="showcase-img">
      </div>
    </div>
    <div class="cards-container">
      <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
    </div>
  </div>
  <div class="home2">
    <div class="secbanner-container"></div>
    <cardsContainer typ="man" i='0'/>
    <cardsContainer typ="woman" i='1'/>
    <cardsContainer typ="discount" i='2'/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import itemCard from '../components/itemCard.vue';
import cardsContainer from '../components/cardsContainer.vue';

export default {
  name: 'Home',
  components: {itemCard,cardsContainer},
  data() {
    return {
      products : [],
    }
  },
    async beforeMount () {
      await axios
        .get('https://localhost:8000/api/v1/newest')
        .then(res => {
          this.products = res.data;
        })
        .catch(err => {
          console.log(err);
      })
    },
}
</script>

<style src="../style/home.css">

</style>
