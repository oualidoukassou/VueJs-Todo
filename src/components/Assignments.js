import AssignmentList from "./AssignmentList.js";
import AddAssignmentForm from "./AddAssignmentForm.js";

export default {
  components: { AssignmentList, AddAssignmentForm },

  template: `
    
<assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
<assignment-list :assignments="CompletedAssignments" title="Completed"></assignment-list>
<add-assignment-form @add="add" ></add-assignment-form>

    `, 
  data() {
    return {
      assignments: [
        { id: 1, name: "Finish project", complete: false },
        { id: 2, name: "Read chapter 4", complete: false },
        { id: 3, name: "Turn in homework", complete: false },
      ],
    };
  },

  computed: {
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },
    CompletedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },

    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },

  methods : {

    add(name){
      this.assignments.push({
        name: name,
        complete: false,
        id : this.assignments.length + 1
      })
    }
  }
};
