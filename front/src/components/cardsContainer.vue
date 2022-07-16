<template>
  <div class="suggested">
    <div class="suggested-texts">
      <h3 class="newest-text">for her</h3>
    </div>
    <div class="suggested-container">
      <div class="back-container"  @click="backward">
        <img src="../assets/forward.png"  class="forward">
      </div>
      <div class="items-container" id="test">
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
      </div>
      <div class="forward-container" @click="forward">
        <img src="../assets/back.png" class="back">
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import itemCard from './itemCard.vue';

export default {
  name: 'cardsContainer',
  components: {itemCard},
  props : ['typ','i'],
    data() {
    return {
      products : [],
    }
  },
  async beforeMount() {
    if (this.typ == 'man') {
      await axios
        .get('https://localhost:8000/api/v1/gender',{ params: {gender: 'man'}})
        .then(res => {
          this.products = res.data;
        })
        .catch(err => {
          console.log(err);
      })
    } else
    if (this.typ == 'woman') {
      await axios
        .get('https://localhost:8000/api/v1/gender',{ params: {gender: 'woman'}})
        .then(res => {
          this.products = res.data;
        })
        .catch(err => {
          console.log(err);
      })
    } else 
    if (this.typ == 'discount') {
      await axios
        .get('https://localhost:8000/api/v1/discount')
        .then(res => {
          this.products = res.data;
        })
        .catch(err => {
          console.log(err);
      })
    }
  },
  methods : {
    backward() {
      document.getElementsByClassName("items-container")[this.i].scrollLeft +=250;
    },
    forward() {
      document.getElementsByClassName("items-container")[this.i].scrollLeft -=250;
    }
  }
}
</script>

<style src="../style/cardsContainer.css">

</style>