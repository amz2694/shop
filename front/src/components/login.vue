<template>
    <div class="loginback">
        <div class="logincontainer">
            <img src="../assets/prof.png" class="loginimg">
            <div class="inputs-container">
                <p class="logintitle">Login</p>
                <p class="logindis">dont have account <span class="create" @click="toggleLogin">create one</span></p>
                <input type="text" placeholder="Email" class="logininput" v-model="Email">
                <input type="text" placeholder="Password" class="logininput" v-model="password">
                <button class="loginbut" @click="login">login</button>
            </div>
            <div class="inputs-container">
                <p class="logintitle">signup</p>
                <p class="logindis">already have account <span class="create" @click="toggleLogin">login</span></p>
                <input type="text" placeholder="Email" class="logininput" v-model="Email">
                <input type="text" placeholder="name" class="logininput" v-model="user">
                <input type="text" placeholder="Password" class="logininput" v-model="password">
                <button class="loginbut" @click="signup">signup</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data() {
      return {
          Email : '',
          password : '',
          user : ''
      }
  },
  methods : {
      toggleLogin () {
        const login = document.getElementsByClassName('inputs-container')[0];
        const signup = document.getElementsByClassName('inputs-container')[1];
        login.classList.toggle('hide');
        signup.classList.toggle('hide');
      },
      async signup () {
          if (this.Email.length && this.password.length && this.user.length) {
              const signupdata = {
                email : this.Email,
                pwd : this.password,
                user : this.user
              }
              await axios
                .post('https://localhost:8000/api/v1/register',signupdata)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
            })
          }
      },
      async login() {
          if (this.Email.length && this.password.length) {
              const signupdata = {
                email : this.Email,
                pwd : this.password,
              }
              axios.defaults.withCredentials = true;
              await axios
                .get('https://localhost:8000/api/v1/login',{params : signupdata},{withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
            })
          }
      }
  }
}
</script>

<style src="../style/login.css">

</style>