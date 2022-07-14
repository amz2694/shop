<template>
  <div class="productpage-container" v-if="!show404">
      <div class="productsection">
        <img :src="img" class="productimg">
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
        <div class="fullinfocontainer hide">
            <table>
                <tr>
                    <td>finalOdor</td>
                    <td>{{product.finalOdor}}</td>
                </tr>
                <tr>
                    <td>middleOdor</td>
                    <td>{{product.middleOdor}}</td>
                </tr>
                <tr>
                    <td>startingOdor</td>
                    <td>{{product.startingOdor}}</td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td>{{product.gender}}</td>
                </tr>
                <tr>
                    <td>volume</td>
                    <td>{{product.volume}}</td>
                </tr>
            </table>
        </div>
        <img src="../assets/forward.png" class="showFull" @click="toggledetails">
      </div>
  </div>
  <div class="commentsection" v-if="!show404">
          <p class="commentsection-p">what are custommer say</p>
          <div class="commentcontainer">
              <comment v-for="(comment,index) in comments" :key="index" :item="comment"/>
          </div>
      </div>
  <div class="notfoundcontainer" v-if="show404">
      <p>404 not found</p>
  </div>
</template>

<script>
import axios from 'axios';
import comment from '../components/comment.vue';

export default {
    name: 'product',
    components : {comment},
    data() {
        return {
            product : {},
            quantity : 1,
            show404 : false,
            img : '',
            comments : []
        }
    },
    async beforeMount () {
        const productID = this.$route.params.product;
        await axios
            .get('https://localhost:8000/api/v1/product',{ params: {ID: productID}})
            .then(res => {
                this.product = res.data[0];
                this.img = res.data[0].pictureURL;
                console.log(this.product)
                if (this.product == undefined) {
                    this.show404 = true
                }
            })
            .catch(err => {
                console.log(err);
        })
        await axios
            .get('https://localhost:8000/api/v1/comment',{ params: {ID: productID}})
            .then(res => {
                this.comments = res.data;
                console.log(this.comments)
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
        toggledetails() {
            const full = document.getElementsByClassName('fullinfocontainer')[0];
            const half = document.getElementsByClassName('productdetails-container')[0];
            full.classList.toggle('hide');
            half.classList.toggle('hide');
        }

    }
}
</script>

<style src="../style/product.css">

</style>s