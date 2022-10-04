<template>
    <div v-if="loggedIn !== 'true'" class="containerLogin">
        <h1>Login TodoApp</h1>
        <div @submit="userLogin()" class="loginInput">
            <form @submit.prevent>
                <input type="email" placeholder="E-mail" v-model="loginEmail">
                <br>
                <input type="passwort" placeholder="Passwort" v-model="loginPassword">
                <br>
                <input type="submit" value="Login"/>
            </form>
        </div>
    </div>
    <button v-else @click="userLogout()">Logout</button>
</template>

<script lang="js" src="../UserLogin/UserLogin.js">
</script>

<style scoped src="./UserLogin.css">
</style>