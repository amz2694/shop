<template>
    <div class="comment-container">
        <p class="date">{{ item.date }}</p>
        <p class="text">{{ item.text }}</p>
        <p class="replay">replay</p>
    </div>
  
</template>

<script>
export default {
    name: 'comment',
    props : ['item'],
}
</script>

<style src="../style/comment.css">

</style>