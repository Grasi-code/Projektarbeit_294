<template>
    <div v-if="loggedIn == true"  class="todoItems">
        <ul>
            <li class="liContainer" v-for="item in infos" :key="item.id">
                <p style="margin-left: 30px;" v-if="updating != item.id">{{item.title}}</p>
                <input v-else maxlength="30" v-model="userUpdateInput">
                <p></p>
                <button @click="tasksDelete(item.id, item.title)" class="button"><img class="Img" src="../../assets/bin.png"></button>
                <button v-if="updating != item.id" @click="this.updating = item.id" class="button"><img class="Img" src="../../assets/stift.png"></button>
                <button v-else @click="tasksUpdate(item.id)" class="button"><img class="Img" src="../../assets/save.png"></button>
            </li>
        </ul>
        <br>
        <div class="links">
            <a href="https://www.flaticon.com/free-icons/trash" title="icons">Icons created by Freepik - Flaticon</a>
        </div>
    </div>
</template>

<script src="./TodoItems.js">
</script>

<style scoped>
    @import './TodoItems.css';
</style>