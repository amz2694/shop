<template>
  <div class="shop-container">
      <div class="category-contaienr">
          <p class="category" @click="getItems(1)">man</p>
          <p class="category" @click="getItems(2)">woman</p>
          <p class="category" @click="getItems(3)">discount</p>
      </div>
      <div class="commodityscontainer" :key="rerender">
          <card v-for="(item, index) in products" :key="index" :item="item"/>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import card from '../components/itemCard.vue';

export default {
    name: 'shop',
    components: {card},
    data() {
        return {
            products : [],
            rerender : 0
        }
    },
    async beforeMount() {
    },
    methods : {
        async getItems (category) {
            if (category == 1) {
                await axios
                    .get('https://localhost:8000/api/v1/gender',{params : {gender : 'man'}})
                    .then(res => {
                        this.products = res.data;
                        this.rerender +=1;
                        
                    })
                    .catch(err => {
                        console.log(err);
                })
            } else 
            if (category == 2) {
                await axios
                    .get('https://localhost:8000/api/v1/gender',{params : {gender : 'woman'}})
                    .then(res => {
                        this.products = res.data;
                        this.rerender +=1;
                    })
                    .catch(err => {
                        console.log(err);
                })
            } else
            if (category == 3) {
                await axios
                    .get('https://localhost:8000/api/v1/discount')
                    .then(res => {
                        this.products = res.data;
                        this.rerender +=1;
                    })
                    .catch(err => {
                        console.log(err);
                })
            }
        } 
    }
}
</script>

<style src="../style/shop.css">

</style>