<template>
  <div class="checkoutProdduct-container">
      <div class="imgcontaienr">
        <img src="../assets/prof.png">
        <span class="quantity">{{ item.quantity }}</span>
      </div>
      <div class="detailscontainer">
          <p>{{ product.price }}</p>
          <p>{{ product.commodityName }}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'checkoutProduct',
  props : ['item'],
  data () {
    return {
      product : {}
    }
  },
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
}
</script>

<style src="../style/checkoutProduct.css">

</style>