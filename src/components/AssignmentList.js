import Assignment from "./Assignment.js"

export default {

    components: {

        Assignment,

    },

    template: `

<section v-show="assignments.length" class="">
    <h2 class="font-bold mb-2 py-2">
    {{ title }}
    <span>( {{assignments.length}} )</span>
    </h2>
    

    <ul class="">
    <assignment v-for="assignment in assignments"
    :key="assignment.id" :assignment="assignment"></assignment>
   </ul>
</section>

    `,

    props:{

        assignments: Array,
        title : String,

    }

}