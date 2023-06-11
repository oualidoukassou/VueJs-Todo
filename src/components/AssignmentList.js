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

    <div class="flex justify-around py-3">
    <button class="outline rounded px-3 py-1" v-for="tag in tags">{{ tag }}</button>
    </div>
    
    <ul class="">
    <assignment v-for="assignment in assignments"
    :key="assignment.id" :assignment="assignment"></assignment>
   </ul>
</section>

    `,

    props: {

        assignments: Array,
        title: String,

    },
    computed :{
        tags() {
            return ['science', 'math','reading'];
        }
    }

}