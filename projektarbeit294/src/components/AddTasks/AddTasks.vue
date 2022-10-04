<template>
    <div v-if="loggedIn" class="addTask">
        <form id="formContainer" @submit.prevent>
            <h2>Erstelle eine neue Aufgabe</h2>
            <input placeholder="Name" class="form-control" autocomplete="off" maxlength="22" v-model="createTaskName" name="title" id="titleInput">
            <button class="btn btn-primary" @click="tasksPost()" type="submit">Erstellen</button>
        </form>
    </div>
</template>

<script lang="js" src="../AddTasks/AddTasks.js"></script>

<style scoped src="./AddTasks.css"></style>