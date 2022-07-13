<template>
  <Header/>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {Header,Footer},
  beforeMount () {
    this.$store.commit('initCart');
    this.$store.commit('initToken');
    this.$store.dispatch('totalCart');
  }
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
}

a, u {
  text-decoration: none;
  color: #000000;
}

</style>
