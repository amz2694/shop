<template>
  <div class="account-container">
      <div class="rightnav-container">
          <div class="rightnav-content" @click="showDashboard">
            <img src="../assets/dashboard.png">
            <p>dashboard</p>
          </div>
          <div class="rightnav-content" @click="showOrders">
            <img src="../assets/orders.png">
            <p>orders</p>
          </div>
          <div class="rightnav-content">
            <img src="../assets/logout.png">
            <p>logout</p>
          </div>
      </div>
      <div class="dashboard-container">
          <p>change account</p>
          <input type="text" class="userinfo" :placeholder="user.customer">
          <input type="text" class="userinfo" placeholder="password">
          <input type="text" class="userinfo" :placeholder="user.address">
          <button class="save">save</button>
      </div>
      <div class="orders-container hide">
          <table>
              <tr class="tableHeading">
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>payment</th>
                  <th class="buttd"></th>
              </tr>
              <tr v-for="(cart,index) in userCarts" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ cart.date }}</td>
                  <td>{{ cart.status }}</td>
                  <td>{{ cart.payment }}</td>
                  <td class="buttd"><button class="viewCartbuts" @click="showcart(index)">View</button></td>
              </tr>
          </table>
      </div>
  </div>
<cartitems v-if="showCartItems" @closeCart="hideCart" :items="items"/>
<login v-if="showLogin" @closeLogin="toggleViewLogin"/>
</template>

<script>
import cartitems from '../components/cartitems.vue';
import login from '../components/login.vue';
import axios from 'axios';

export default {
    name: 'myAccount',
    components: {cartitems,login},
    data() {
      return {
          showCartItems : false,
          showLogin : false,
          user : {},
          accessToken : '',
          userCarts : [],
          items : []
      }
    },
    async beforeMount() {
        this.accessToken = this.$store.state.accessToken;
        if (this.accessToken) {
            await axios
                .get('https://localhost:8000/api/v1/refresh', {withCredentials: true})
                .then(res => {
                    this.accessToken = res.data.accessToken;
                    this.getUser();
                    this.showLogin = false;
                })
                .catch(err => {
                    this.showAuth = true;
                    console.log(err);
                })
            } else {
                this.showLogin = true;
            }
    },
    methods : {
        async getUser () {
            const config = {
                headers: { Authorization: `Bearer ${this.accessToken}` }
            };
                await axios
                    .get('https://localhost:8000/api/v1/user',config)
                    .then(res => {
                        this.user = res.data;
                    })
                    .catch(err => {
                        console.log(err);
                })
                await axios
                    .get('https://localhost:8000/api/v1/getcart',config)
                    .then(res => {
                        for (let i=0 ;i<res.data.length;i++) {
                            this.userCarts.push(res.data[i])
                        }
                    })
                    .catch(err => {
                        console.log(err);
                })
        },
        showDashboard() {
            const dashboard = document.getElementsByClassName('dashboard-container')[0];
            const orders = document.getElementsByClassName('orders-container')[0];
            dashboard.classList.remove('hide');
            orders.classList.add('hide');
        },
        showOrders() {
            const dashboard = document.getElementsByClassName('dashboard-container')[0];
            const orders = document.getElementsByClassName('orders-container')[0];
            dashboard.classList.add('hide');
            orders.classList.remove('hide');
        },
        hideCart() {
            this.showCartItems = false; 
        },
        showcart (i) {
            this.items = this.userCarts[i].cart;
            this.showCartItems = true; 
        },
        toggleViewLogin(accessToken) {
            this.showLogin = !this.showLogin;
            if (accessToken) {
                this.accessToken = accessToken;
                this.getUser();
                this.$store.state.accessToken = accessToken;
                this.$store.commit('saveToken');
            }
        }
    }

}
</script>

<style src="../style/maAccount.css">

</style>