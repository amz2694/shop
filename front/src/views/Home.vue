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
          <p class="text-header">test</p>
          <p class="text-dis">test stsetst stst stt es</p>
        </div>
        <img src="../assets/prof.png" class="showcase-img">
      </div>
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">test</p>
          <p class="text-dis">test stsetst stst stt es</p>
        </div>
        <img src="../assets/prof.png" class="showcase-img">
      </div>
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">test</p>
          <p class="text-dis">test stsetst stst stt es</p>
        </div>
        <img src="../assets/prof.png" class="showcase-img">
      </div>
    </div>
    <div class="cards-container">
      <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
    </div>
  </div>
  <div class="home2">
    <div class="secbanner-container"></div>
    <cardsContainer typ="man"/>
    <cardsContainer typ="woman"/>
    <cardsContainer typ="discount"/>
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
