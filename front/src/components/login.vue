<template>
    <div class="loginback">
        <div class="logincontainer">
            <img src="../assets/prof.png" class="loginimg">
            <div class="inputs-container">
                <p class="logintitle">Login</p>
                <p class="logindis">dont have account <span class="create">create one</span></p>
                <input type="text" placeholder="Email" class="logininput">
                <input type="text" placeholder="Password" class="logininput">
                <button class="loginbut">login</button>
            </div>
            <div class="inputs-container hide">
                <p class="logintitle">signup</p>
                <p class="logindis">already have account <span class="create">login</span></p>
                <input type="text" placeholder="Email" class="logininput">
                <input type="text" placeholder="Password" class="logininput">
                <input type="text" placeholder="Password" class="logininput">
                <button class="loginbut">login</button>
            </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style src="../style/login.css">

</style>