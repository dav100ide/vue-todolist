const { createApp } = Vue;

createApp({
   data() {
      return {
         todoList: [
            {
               text: 'fare la spesa',
               done: false,
            },
            {
               text: 'allenarsi in palestra',
               done: true,
            },
            {
               text: 'uscire il cane',
               done: false,
            },
         ],
         newTodo: {
            text: '',
            done: false,
         },
      };
   },
   methods: {
      // metodi vue js
      removeTodo(index) {
         this.todoList.splice(index, 1);
      },
      addTodo() {
         this.todoList.push(this.newTodo);
         console.log(this.newTodo);
      },
   },
}).mount('#app');
