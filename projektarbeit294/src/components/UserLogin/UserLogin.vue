<template>
    <div v-if="!loggedIn" class="containerLogin">
        <h1>Login TodoApp</h1>
        <div @submit="userLogin()" class="loginInput">
            <form @submit.prevent>
                <input type="email" class="form-control" placeholder="E-mail" v-model="loginEmail">
                <br>
                <input type="passwort" class="form-control" placeholder="Passwort" v-model="loginPassword">
                <br>
                <input class="btn btn-primary" type="submit" value="Login"/>
            </form>
        </div>
    </div>
    <button class="btn btn-secondary" v-else @click="userLogout()">Logout</button>
</template>

<script lang="js" src="../UserLogin/UserLogin.js">
</script>

<style scoped src="./UserLogin.css">
</style>