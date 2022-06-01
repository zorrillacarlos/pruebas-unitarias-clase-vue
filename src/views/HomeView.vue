<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoApp />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoApp from '@/components/TodoApp.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TodoApp
  }
}
</script>
