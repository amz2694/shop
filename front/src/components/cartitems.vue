<template>
    <div class="itemsbackground">
        <div class="items">
            <div class="table-header">
                <p class="product">Product</p>
                <p>Price</p>
                <p class='QTY'>QTY</p>
                <p class='total'>Total</p>
            </div>
            <div class="cartItem-container">
                <img src="../assets/prof.png" class="itemimg">
                <p class="itemtitle">test</p>
                <p class="itemprice">250</p>
                <div class="qty-container">
                    <p class="qty">2</p>
                </div>
                <p class="totalprice">500</p>
            </div>
            <div class="cartItem-container">
                <img src="../assets/prof.png" class="itemimg">
                <p class="itemtitle">test</p>
                <p class="itemprice">250</p>
                <div class="qty-container">
                    <p class="qty">2</p>
                </div>
                <p class="totalprice">500</p>
            </div>
            <div class="cartItem-container">
                <img src="../assets/prof.png" class="itemimg">
                <p class="itemtitle">test</p>
                <p class="itemprice">250</p>
                <div class="qty-container">
                    <p class="qty">2</p>
                </div>
                <p class="totalprice">500</p>
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
}
</script>

<style src="../style/cartItems.css" >

</style>