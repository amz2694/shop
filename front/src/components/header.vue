<template>
  <div class="header">
      <div class="header-container">
        <router-link to="/cart">
        <div class="cart-container">
            <img src="../assets/cart.png" alt="cart" class="cartimg">
            <span>{{ this.$store.state.totalCart }}</span>
        </div>
        </router-link>
        <router-link to="/">
        <div class="logo-container">
            <img src="../assets/shop.png" alt="" class="shoplogo">
        </div>
        </router-link>
        <div class="option-container">
          <form method="get" action="/#/search">
            <input type="search" class="search" placeholder="search" name="query">
          </form>
            <span class="register" @click="toggleViewLogin">register</span>
            |
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