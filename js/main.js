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
      };
   },
   methods: {
      // metodi vue js
      removeTodo(index) {
         this.todoList.splice(index, 1);
      },
   },
}).mount('#app');
