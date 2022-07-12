<template>
    <div class="searchcontainer">
        <div class="cards-container">
            <itemCard v-for="(product,index) in products" :key="index" :item="product"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import itemCard from '../components/itemCard.vue'

export default {
    name : 'search',
    components : {itemCard},
    data () {
        return {
            products: [],
            query: ''
        }
    },
    beforeMount() {
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)
        if (params.get('query')) {
            this.query = params.get('query');
            this.performSearch()
        }
    },
    methods : {
        async performSearch() {
            await axios
                .get('https://localhost:8000/api/v1/search',{params : {search : this.query}})
                .then(res => {
                    this.products = res.data;
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>

<style src="../style/search.css">

</style>