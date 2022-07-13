<template>
  <div class="productpage-container" v-if="!show404">
      <img src="../assets/prof.png" class="productimg">
      <div class="productdetails-container">
          <p class="producttitle">{{ product.commodityName }}</p>
          <div class="downtitle">
              <div class="productquantity-container">
                  <button @click="minus" class="click">-</button>
                  <input class="productquantity" v-model="quantity" type="number" min="1">
                  <button @click="plus" class="click">+</button>
              </div>
              <p class="productprice">{{ product.price }}</p>
          </div>
          <p class="productdis">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore dignissimos sunt similique eaque quo at labore ex tenetur quisquam facere. Veniam dolorem id voluptates quis facere esse expedita nulla est.</p>
          <button class="addtocartbut">
              <img src="../assets/cart-24.png" class="carticon">
              <span @click="addToCart">ADD TO CART</span>
          </button>
      </div>
  </div>
  <div class="notfoundcontainer" v-if="show404">
      <p>404 not found</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'product',
    data() {
        return {
            product : {},
            quantity : 1,
            show404 : false,
        }
    },
    async beforeMount () {
        const productID = this.$route.params.product;
        await axios
            .get('https://localhost:8000/api/v1/product',{ params: {ID: productID}})
            .then(res => {
                this.product = res.data[0];
                if (this.product == undefined) {
                    console.log('yo')
                    this.show404 = true
                }
            })
            .catch(err => {
                console.log(err);
        })
    },
    methods : {
        addToCart () {
            let item = {
                id : this.product.commodityID,
                quantity : this.quantity
            }
            console.log(item)
            this.$store.commit('addToCart',item);
        },
        plus () {
            this.quantity += 1;
        },
        minus () {
            if (this.quantity > 1) {
                this.quantity -= 1;
            }
        },

    }
}
</script>

<style src="../style/product.css">

</style>s