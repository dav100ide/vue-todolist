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
            text: null,
            done: false,
         },
      };
   },
   methods: {
      // metodi vue js
      removeTodo(index) {
         this.todoList.splice(index, 1);
      },
      addTodo(text) {
         if (text !== null) {
            const newTodo = {
               text: text,
               done: false,
            };
            this.todoList.push(newTodo);
            this.newTodo.text = null;
         }
      },
      doneSwitch(index) {},
   },
}).mount('#app');
