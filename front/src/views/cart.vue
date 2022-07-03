<template>
    <div class="cartpagecontainer">
        <div class="cartcontainer">
            <div class="tableheader">
                <p class="product">Product</p>
                <p>Price</p>
                <p class='QTY'>QTY</p>
                <p class='total'>Total</p>
            </div>
            <cartItem/>
            <cartItem/>
            <cartItem/>
        </div>
        <div class="cartcheckout">
            <div class="subtotal-container">
                <p>subtotal</p>
                <p>750</p>
            </div>
            <button class="checkoutbut">checkout</button>
        </div>
    </div>
</template>

<script>
import cartItem from '../components/cartItem.vue'

export default {
  name: 'cart',
  components: {cartItem}
}
</script>

<style src="../style/cart.css">

</style>