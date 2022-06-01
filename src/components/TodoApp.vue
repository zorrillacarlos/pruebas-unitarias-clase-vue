<template>
      <!-- DOC DATA-* -->
      <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-* -->
  <div>
      <div v-for="item in todos" :key="item.id" data-prueba="lista">
          {{item.text}}
      </div>
      <form data-prueba="form" @submit.prevent='crearTodo'>
          <input data-prueba="new-todo" type="text" v-model="newTodo">
      </form>
      <h2 data-prueba="lista">hola mundo</h2>
  </div>
</template>

<script>
export default {
    name:"TodoApp",
    data(){
        return{
            newTodo:'',
            todos:[
                {
                    id:1,
                    text: "Prueba de Texto",
                    completado: false
                }
            ]
        }
    },

    methods:{
        crearTodo(){
            this.todos.push({
                id:2,
                text: this.newTodo,
                completado: false
            })
        }
    }

}
</script>

<style>

</style>