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
            //input validation
            const newTodo = {
               text: text,
               done: false,
            };
            this.todoList.push(newTodo);
            this.newTodo.text = null;
         }
      },
      doneSwitch(index) {
         // switcha true a false e viceversa
         let doneStatus = this.todoList[index].done;
         doneStatus === true ? (this.todoList[index].done = false) : (this.todoList[index].done = true);
         console.log(this.todoList[index].done);
      },
   },
}).mount('#app');
