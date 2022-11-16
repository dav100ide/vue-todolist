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
         newTodoText: null,
      };
   },
   methods: {
      // metodi vue js
      removeTodo(index) {
         this.todoList.splice(index, 1);
      },
      addTodo() {
         if (this.newTodoText !== null) {
            //input validation
            const newTodo = {
               text: this.newTodoText,
               done: false,
            };
            this.todoList.push(newTodo);
            this.newTodoText = null;
         }
      },
      doneSwitch(index) {
         this.todoList[index].done = !this.todoList[index].done;
      },
   },
}).mount('#app');
