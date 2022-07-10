<template>
  <div class="header">
      <div class="header-container">
        <div class="cart-container">
            <img src="../assets/cart.png" alt="cart" class="cartimg">
            <span>500</span>
        </div>
        <div class="logo-container">
            <span>SHOP</span>
        </div>
        <div class="option-container">
            <input type="search" class="search" placeholder="search">
            <span class="register" @click="toggleViewLogin">register</span>
            <span class="login" @click="toggleViewLogin">login</span>
        </div>
      </div>
  </div>
  <login v-if="showLogin" @closeLogin="toggleViewLogin"/>
</template>

<script>
import login from './login.vue'

export default {
  name: 'header',
  components: {login},
  data () {
    return {
      showLogin : false
    }
  },
  methods : {
    toggleViewLogin() {
      this.showLogin = !this.showLogin;
    }
  }
}
</script>

<style src='../style/header.css'>

</style>