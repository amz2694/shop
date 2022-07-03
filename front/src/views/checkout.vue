<template>
  <div class="checkout-container">
      <div class="checkoutAdddress-container">
          <p class="addressTittle">Shipping address</p>
          <input type="text" class="name-input" placeholder="name">
          <input type="text" class="city-input" placeholder="city">
          <input type="text" class="number-input" placeholder="number">
          <input type="text" class="address-input" placeholder="address">
          <div class="button-container">
              <button class="return">return to cart</button>
              <button class="continue">Continue to shipping</button>
          </div>
      </div>
      <div class="checkoutCart-container">
          <p class="itemsNumber">3 items</p>
          <div class="checkout-cart-container">
              <checkoutProduct/>
              <checkoutProduct/>
          </div>
          <div class="subtotalcontainer">
              <p>subtotal</p>
              <p>750</p>
          </div>
          <div class="shippingcontainer">
              <p>shipping</p>
              <p>20</p>
          </div>
          <div class="totalpaycontainer">
              <p>Total to pay</p>
              <p>770</p>
          </div>
      </div>
  </div>
</template>

<script>
import checkoutProduct from '../components/checkoutProduct.vue'

export default {
  name: 'App',
  components: {checkoutProduct}
}
</script>

<style src="../style/checkout.css">

</style>