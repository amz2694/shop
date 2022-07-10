<template>
    <div class="itemsbackground" @click.self="close">
        <div class="items">
            <div class="table-header">
                <p class="product">Product</p>
                <p>Price</p>
                <p class='QTY'>QTY</p>
                <p class='total'>Total</p>
            </div>
            <div class="cartItem-container" v-for="(item,index) in items" :key="index">
                <img src="../assets/prof.png" class="itemimg">
                <p class="itemtitle">test</p>
                <p class="itemprice">{{ item.perOnePrice}}</p>
                <div class="qty-container">
                    <p class="qty">{{ item.quantity }}</p>
                </div>
                <p class="totalprice">{{ item.perOnePrice*item.quantity }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cartItems',
    data() {
      return {
      }
    },
    props : ['items'],
    methods : {
        close() {
            this.$emit("closeCart");
        }
    }
}
</script>

<style src="../style/cartItems.css" >

</style>