<template>
  <div class="home">
    <div class="upper">
      <div class="categorycontaienr">
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
        <div class="span">test</div>
      </div>
    </div>
    <div class="banner-container"></div>
    <div class="showcases-container">
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">test</p>
          <p class="text-dis">test stsetst stst stt es</p>
        </div>
        <img src="../assets/prof.png" class="showcase-img">
      </div>
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">test</p>
          <p class="text-dis">test stsetst stst stt es</p>
        </div>
        <img src="../assets/prof.png" class="showcase-img">
      </div>
      <div class="showcase-container">
        <div class="showcase-text">
          <p class="text-header">test</p>
          <p class="text-dis">test stsetst stst stt es</p>
        </div>
        <img src="../assets/prof.png" class="showcase-img">
      </div>
    </div>
    <div class="cards-container">
      <itemCard/>
      <itemCard/>
      <itemCard/>
      <itemCard/>
      <itemCard/>
      <itemCard/>
      <itemCard/>
      <itemCard/>
    </div>
  </div>
  <div class="home2">
    <div class="secbanner-container"></div>
    <cardsContainer/>
    <cardsContainer/>
    <cardsContainer/>
  </div>
</template>

<script>
// @ is an alias to /src
import itemCard from '../components/itemCard.vue'
import cardsContainer from '../components/cardsContainer.vue'

export default {
  name: 'Home',
  components: {itemCard,cardsContainer}
}
</script>

<style src="../style/home.css">

</style>
