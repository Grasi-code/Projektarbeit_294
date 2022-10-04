<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AddTask/>
</template>

<script>
import AddTask from './components/AddTask/AddTask.vue';


export default {
  name: 'App',
  components: {
    AddTask
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
