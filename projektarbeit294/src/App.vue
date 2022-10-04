<template>
  <div>
    <div class="page">
      <AddTasks/>
      <TodoItems></TodoItems>
    </div>
    <UserLogin></UserLogin>
  </div>
</template>

<script>
import AddTasks from '@/components/AddTasks/AddTasks.vue';
import TodoItems from '@/components/TodoItems/TodoItems.vue';
import UserLogin from '@/components/UserLogin/UserLogin.vue';
export default {
  name: 'App',
  components: {
    AddTasks,
    TodoItems,
    UserLogin
}
}
</script>

<style>
  body{
    text-align: center;
  }
</style>