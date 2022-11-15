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
               done: false,
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
   },
}).mount('#app');
