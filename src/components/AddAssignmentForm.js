export default {
  template: `

  <form @submit.prevent="add" class="text-black">
  <div class="flex justify-between mx">
      <input v-model="newAssignment" type="text" class="w-full">
      <button  class="bg-green-500 hover:bg-green-700 px-4 py-2" >Add</button>
  </div>


</form>
    
    `,

  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.assignments.push({
        id: this.assignments.length + 1,
        name: this.newAssignment,
        complete: false,
      });

      this.newAssignment = "";
    },
  },
};
