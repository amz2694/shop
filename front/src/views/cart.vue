<template>
    <div class="cartpagecontainer">
        <div class="cartcontainer">
            <div class="tableheader">
                <p class="product">Product</p>
                <p>Price</p>
                <p class='QTY'>QTY</p>
                <p class='total'>Total</p>
            </div>
            <cartItem v-for="(item, index) in cart" :key="index" :item="item" @removeFromCart="removeFromCart"/>
        </div>
        <div class="cartcheckout">
            <div class="subtotal-container">
                <p>subtotal</p>
                <p>{{ this.$store.state.totalCart }}</p>
            </div>
            <button class="checkoutbut">checkout</button>
        </div>
    </div>
</template>

<script>
import cartItem from '../components/cartItem.vue';
import axios from 'axios';

export default {
    name: 'cart',
    components: {cartItem},
    data() {
        return {
            cart : [],
            total : 0
        }
    },
    async beforeMount() {
        this.cart = this.$store.state.cart;

    },
    methods : {
        removeFromCart(item) {
            this.cart = this.cart.filter(
                (i) => i.id !== item.id
            );
            this.$store.state.cart = this.$store.state.cart.filter(
                (i) => i.id !== item.id
            );
            this.$store.commit('saveCart');
        }
    }
}
</script>

<style src="../style/cart.css">

</style>