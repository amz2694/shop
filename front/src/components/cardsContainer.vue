<template>
  <div class="suggested">
    <div class="suggested-texts">
        <h3 class="newest-text">for her</h3>
    </div>
    <div class="suggested-container">
        <div class="items-container" id="test">
            <itemCard/>
            <itemCard/>
            <itemCard/>
            <itemCard/>
            <itemCard/>
            <itemCard/>
        </div>
    </div>

  </div>
</template>

<script>
import itemCard from './itemCard.vue'

export default {
  name: 'cardsContainer',
  components: {itemCard},
  methods : {
        backward() {
            document.getElementsByClassName("books-container")[this.i].scrollLeft +=250;
        },
        forward() {
            document.getElementsByClassName("books-container")[this.i].scrollLeft -=250;
        }
  }
}
</script>

<style src="../style/cardsContainer.css">

</style>